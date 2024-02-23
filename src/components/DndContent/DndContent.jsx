
import {Box, Typography} from '@mui/material'

import DndList from '../../components/ProjectComponent/DndList';

import {DragDropContext} from 'react-beautiful-dnd';
import {useState} from 'react';
const DndContent = () => {
    const [incomplete, setIncomplete] = useState([
        {
            id: '1',
            title: 'make portfolio'
        },
        {
            id: '2',
            title: 'make ecommerce web site'
        },
        {
            id: '3',
            title: 'make ecommerce web site'
        },
        {
            id: '4',
            title: 'make ecommerce web site'
        }, {
            id: '5',
            title: 'make ecommerce web site'
        },

    ])

    const [completed, setCompleted] = useState([]);
    const handleDragEnd = (result) => {
      const { source, destination, draggableId } = result;
  
      if (!destination) return; // The item was dropped outside of any droppable area
  
      // Find the task by id
      const task = incomplete.find(item => item.id === draggableId);
      if (!task) return; // Task not found
  
      if (source.droppableId === destination.droppableId) {
          // If the item was dropped in the same list, do nothing
          return;
      } else {
          // Otherwise, remove the task from the source list
          setIncomplete(prevIncomplete => prevIncomplete.filter(item => item.id !== draggableId));
      }
  
      // Add the task to the destination list
      setCompleted(prevCompleted => [...prevCompleted, task]);
  };
  


    // remove item by id
    const removeItemById = (items, id) => {
        return items.filter(item => item.id !== id)
    }

    // find item by id
    const findItemById = (id, items) => {
        return items.find(item => item.id === id)
    }
    return (
        <div className='WSC'>
                <Box display={'flex'} >
            

            <Box display={'flex'}
                flexDirection={'column'}
                width={'100%'}>
                <Box sx={
                    {
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '100%',
                        padding: '15px',
                        borderBottom: '1px solid #ccc'
                    }
                }>


                    <Typography>
                        Project
                    </Typography>

                </Box>
                <Box padding={'50px'}
                    display={'flex'}
                    gap='15px'>

                    {/* <DragDropContext onDragEnd={handleDragEnd}>
                        <DndList title="To Do" color="#FF7A00"
                            content={incomplete}
                            id="1"/>
                        <DndList title="Completed" color="#8fff00"
                            content={completed}
                            id="2"/>
                    </DragDropContext> */}
                    <DragDropContext onDragEnd={handleDragEnd}>


                        <DndList title={'To Do'}
                            color={'#FF7A00'}
                            content={incomplete}
                            id={'1'}/>
                        <DndList title={'Working On'}
                            color={'#Fa00ff'}
                            content={[]}
                            id={'2'}/>
                        <DndList title={'Waiting for validation'}
                            color={'#0066ff'}
                            content={[]}
                            id={'3'}/>
                        <DndList title={'Need some updates'}
                            color={'#5200ff'}
                            content={[]}
                            id={'4'}/>
                        <DndList title={'Completed'}
                            color={'#8fff00'}
                            content={completed}
                            id={'5'}/>

                    </DragDropContext> </Box>
            </Box>


        </Box>
        </div>
    );
}

export default DndContent;
