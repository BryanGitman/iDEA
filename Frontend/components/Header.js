Header = () =>
{
  return (
    <View style={styles.header}>
      <Image
        style={styles.indexLogo}
        source={require('../assets/logo.png')}
      />
    </View>
    );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
  
export default Header;