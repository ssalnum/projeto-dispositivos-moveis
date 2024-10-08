import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {Button, Searchbar} from 'react-native-paper';
import Card from '../components/Card';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    secondary: 'yellow',
  },
};

const Home = props => {
  const [searchQuery, setSearchQuery] = useState('');

  const goToNewSurvey = () => {
    props.navigation.navigate('Nova pesquisa');
  };

  const goToResearchActions = () => {
    props.navigation.navigate('Carnaval');
  };

  // const goToModifySurvey = () => {
  //   props.navigation.navigate('Modificar pesquisa')
  // }

  return (
    <PaperProvider>
      <View style={styles.ctBackground}>
        <View style={styles.ctContent}>
          <Searchbar
            style={{
              backgroundColor: '#FFFFFF',
              fontFamily: 'AveriaLibre-Regular',
              borderRadius: 0,
              marginBottom: 30,
              height: 36,
            }}
            placeholder="Insira o termo de busca"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />

          <View style={styles.ctCard}>
            <TouchableOpacity
              style={styles.buttonImage}
              onPress={goToResearchActions}>
              <Card
                title="SECOMP 2023"
                date="10/10/2023"
                imageUrl="https://techservices.illinois.edu/wp-content/uploads/2021/08/computer-lab-icon-2-1024x1024.jpg"></Card>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonImage}
              onPress={goToResearchActions}>
              <Card
                title="UBUNTU 2022"
                date="05/06/2022"
                imageUrl="https://i.fbcd.co/products/resized/resized-750-500/7cc2c65db340c02bf4d492614b276a8dc450351f2e1a7b954d9ec0efb12e3e7a.jpg"></Card>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonImage}
              onPress={goToResearchActions}>
              <Card
                title="MENINAS CPU"
                date="01/04/2022"
                imageUrl="https://t4.ftcdn.net/jpg/01/09/46/77/360_F_109467715_Kwj7MaQhjS8LQNURNzsxugVp2n72Xylh.jpg"></Card>
            </TouchableOpacity>
          </View>

          <Button
            onPress={goToNewSurvey}
            style={styles.buttonNew}
            mode="contained"
            labelStyle={{fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}>
            NOVA PESQUISA
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  ctCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 60,
  },
  ctBackground: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#372775',
    paddingHorizontal: 28,
    paddingVertical: 10,
  },
  ctContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonNew: {
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#37BD6D',
  },
  buttonImage: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});

export default Home;
