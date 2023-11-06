
const MisDEA = ({ navigation }) => {
    const DEA = useContext(UserContext);
       
    return (
      <SafeAreaView style={styles.container}>
        <DEAHeader navigation={navigation} titulo="Mis DEA"></DEAHeader>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column'
    }
});

export default MisDEA;
