import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react';
import React, { useState } from 'react'
import ico from "../../../assets/eye_2533656.png";


export const ModalAsistencia = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = useState('md')

    const handleOpen = (size) => {
        setSize(size)
        onOpen();
    }

    return (
        <div>
            <div className="flex flex-wrap gap-3">
                <Button className=' border-[1px] rounded-[5px] w-[100px] h-[28px] border-black bg-white ' key={size} onPress={() => handleOpen(size)}> Asistencias<img src={ico} className='h-5' /></Button>
            </div>
            <Modal


                size={size}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent className=' box-border overflow-y-auto h-[80vh] max-w-[130vh]'  >
                    {(onClose) => (
                        <div>
                            <ModalHeader className="flex flex-col gap-1 items-center text-3xl font-mono">Este contrato se celebra entre:</ModalHeader>
                            <ModalBody >


                            </ModalBody>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}

