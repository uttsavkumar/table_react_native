import { Button, Input, Modal, Text } from 'native-base';
import React from 'react'

const AddModel = ({ setModalVisible }) => {
    return (
        <>
            <Modal.Content flex={.6} >
                <Modal.CloseButton colorScheme={'white'} />
                <Modal.Header backgroundColor={'#01987a'}><Text fontSize={18} fontWeight={700} color='white'>Add New Rank</Text></Modal.Header>
                <Modal.Body>
                <Input mt={3} size="lg" placeholder="Name" _light={{
                        placeholderTextColor: "blueGray.400"
                    }} _dark={{
                        placeholderTextColor: "blueGray.50"
                    }} />
                    <Input mt={4} size="lg" placeholder="Enter Academic Marks" _light={{
                        placeholderTextColor: "blueGray.400"
                    }} _dark={{
                        placeholderTextColor: "blueGray.50"
                    }} />
                    <Input mt={3} size="lg" placeholder="Enter Sports Point" _light={{
                        placeholderTextColor: "blueGray.400"
                    }} _dark={{
                        placeholderTextColor: "blueGray.50"
                    }} />
                  
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                            setModalVisible(false);
                        }}>
                           <Text fontSize='16'>Cancel</Text>
                        </Button>
                        <Button backgroundColor={'#01987a'} variant='subtle' size='lg' onPress={() => {
                            setModalVisible(false);

                        }}>
                            <Text fontSize='16' color='white'>Save</Text>
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </>
    )
}

export default AddModel