import React from 'react'
import { Box, Typography } from '@mui/material';
import DndItem from './DndItem';
import { FaPlus } from "react-icons/fa6";
import { Droppable } from 'react-beautiful-dnd';






function DndList({ title, color, id, content }) {
    return (
        <Box width="22%" display="flex" flexDirection="column" alignItems="center" gap="30px">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    padding: '20px',
                    borderTop: `4px solid ${color}`,
                    borderRadius: '5px',
                    boxShadow: '0 1px 4px 0px rgba(0, 0, 0, 0.1)',
                    height: '50px'
                }}>
                <Typography>{title}</Typography>
            </Box>
            <Box display="flex" flexDirection="column" gap="20px">
                <Droppable droppableId={'1'}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isdraggingover={snapshot.isdraggingover}
style={{width: '100%'}}
                            >
                            {content.map((task, index) => (
                                <DndItem task={task} index={index} key={task.id} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </Box>
        </Box>
    );
}

export default DndList;
