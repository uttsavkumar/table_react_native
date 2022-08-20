import { Box, Button, Fab, Icon, Modal, NativeBaseProvider, Pressable, Text, View } from 'native-base'
import React from 'react'
import TableComponent from './Components/TableComponent'
import AntDesign from 'react-native-vector-icons/AntDesign';
import AddModel from './Components/AddModel';
const App = () => {
  const [modalVisible, setModalVisible] = React.useState(true);

  const handleModal = () => {
    setModalVisible(true)
  }
  return (
    <>
      <NativeBaseProvider>
        <Box style={{ flex: 1, backgroundColor: 'white' }}>
          <TableComponent />
         
          <Fab
            renderInPortal={false}
            shadow={3}
            size="lg"
            backgroundColor={'#01987a'}
            icon={<Icon color="white" as={AntDesign} name="plus" size="lg" />}
            onPress={() =>  handleModal() }
          />
        </Box>

        <Modal isOpen={modalVisible} onClose={setModalVisible} size={'full'}>
          <AddModel setModalVisible={setModalVisible} />
        </Modal>
      </NativeBaseProvider>

    </>
  )
}

export default App