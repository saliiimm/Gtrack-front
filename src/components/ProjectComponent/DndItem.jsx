import React from 'react'
import {Box, Typography, Radio, Avatar} from '@mui/material';
import {Draggable} from 'react-beautiful-dnd';

function DndItem({task, index}) {
    console.log('===================================='),
     console.log(task.id),
     console.log('====================================')
    return (
        <Draggable draggableId={'1'} index={index} key={`${ task.id }`}>

            {
            (provided, snapshot) => (
                <Box ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isdragging={snapshot.isdragging}
                    style={
                        {
                            height: 'auto',
                            width: '100%',
                            padding: '20px',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            boxShadow: '0 1px 4px 0px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            flexDirection: 'column',
                            gap: '10px',
                            marginBottom: '10px'

                        }
                }>
                    <Typography fontSize={
                            '17px'
                        }
                        fontWeight={
                            '600'
                        }
                        color='#000'
                        width={
                            '340x'
                        }>
                        {
                        task.title
                    } </Typography>
                    <Box display={
                            'flex'
                        }
                        justifyContent={
                            'space-between'
                        }
                        alignItems={
                            'center'
                        }
                        width={
                            '100%'
                    }>
                        <Radio/> <Avatar alt="Remy Sharp"
                            src="../../assets/avatar.jpg"/>
                    </Box>
                </Box>
            )
        }



        </Draggable>


    )
}

export default DndItem


// <Box sx={
//     {
//         height: 'auto',
//         width: '100%',
//         padding: '20px',
//         backgroundColor: 'white',
//         borderRadius: '5px',
//         boxShadow: '0 1px 4px 0px rgba(0, 0, 0, 0.1)',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         // cursor: 'pointer',
//         flexDirection: 'column',
//         gap: '10px'

//     }
// }>

//     <Typography fontSize={'17px'}
//         fontWeight={'600'}
//         color='#000'
//         width={'340x'}>
//         We write here the title of the task and what does the end user have to do
//     </Typography>
//     <Box display={'flex'}
//         justifyContent={'space-between'}
//         alignItems={'center'}
//         width={'100%'}>
//         <Radio/>

//         <Avatar alt="Remy Sharp" src="../../assets/avatar.jpg"/>


//     </Box>

// </Box>
