import { Box, Button, HStack, Modal, Row, Text, VStack } from 'native-base';
import React from 'react'
import { StyleSheet } from 'react-native';

const ViewModel = ({ setModal }) => {
    return (
        <>
            <Modal.Content minHeight={330} >
                <Modal.CloseButton  />
                <Modal.Header backgroundColor={'#01987a'}><Text fontSize={18} fontWeight={700} color='white'>Student Data</Text></Modal.Header>
                <Modal.Body>
                    <HStack mt={5} space={20} >
                        <VStack space={3}>
                                <Text style={styles.font}>Name</Text>
                                <Text style={styles.font}>Academic Marks</Text>
                                <Text style={styles.font}>Sports Marks</Text>
                        </VStack>
                        <VStack space={3}>
                                <Text style={[styles.font,styles.smallfont]}>New</Text>
                                <Text style={[styles.font,styles.smallfont]}>200</Text>
                                <Text style={[styles.font,styles.smallfont]}>20</Text>
                        </VStack>

                    </HStack>
                </Modal.Body>
                <Modal.Footer>   
                        <Button backgroundColor={'red.500'} size='lg' variant={'ghost'} onPress={() => {setModal(false) }}>
                            <Text fontSize='16'  color='white'>Delete</Text>
                        </Button>
                  
                </Modal.Footer>
            </Modal.Content>
        </>
    )
}

export default ViewModel

const styles = StyleSheet.create({
    font:{
        fontSize:17,
        fontWeight:'500'
    },
    smallfont:{
        fontSize:15,
        color:'grey'
    }
})