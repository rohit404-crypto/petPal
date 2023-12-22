import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import VetHeader from '../components/VetHeader';
import { Icon } from '@rneui/themed';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';

const VetDescriptionScreen = () => {
  const images = [1, 2, 3, 4];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        <VetHeader />
        <View style={styles.container}>
          <Image style={{ width: 120, height: 150, borderRadius: 50 }} source={require('../assets/Jojo.png')} />
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Dog And Cat Care Home</Text>
            <TouchableOpacity style={styles.location} >
              <Text style={{ fontSize: 17, color: 'green', fontWeight: '400' }}>
                <Icon name="location" type="entypo" color="green" size={13} /> Tundla
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10, alignItems: 'center', backgroundColor: 'green', borderRadius: 5, height: 40 }}>
              <Icon name='phone' type='Feather' color='white' size={20} containerStyle={{ marginLeft: 15 }} />
              <Text style={{ fontSize: 20, color: 'white', fontWeight: '600', marginLeft: 10 }}> 07321034602</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, marginTop: 20 }}>Photos</Text>
        <Divider  width={2} style={{ marginLeft: 20 , marginRight: 10 }} />
        <FlatList
            data={images}
            renderItem={({ item }) => <Image style={{ width: 200, height: 200 }} source={require('../assets/Jojo.png')} />}
            keyExtractor={item => item.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        <View style={{marginLeft: 20, marginTop: 20}}>
          <Text style={{ fontWeight: 'bold', fontSize: 20,  }}>Treatments</Text>
          <Divider  width={2} style={{ marginRight: 10 }} />
          <View style={{  marginTop: 20 , flexDirection: 'row' , gap: 10}}>
            <Icon name='checksquare' type='antdesign' color='green' size={20}/>
            <Text>First Aid</Text>
          </View>
          <View style={{  marginTop: 10 , flexDirection: 'row' , gap: 10}}>
            <Icon name='checksquare' type='antdesign' color='green' size={20}/>
            <Text>Treatments Of Birds</Text>
          </View>
          <View style={{  marginTop: 10 , flexDirection: 'row' , gap: 10}}>
            <Icon name='checksquare' type='antdesign' color='green' size={20}/>
            <Text>Gastroentritis</Text>
          </View>
          <View style={{  marginTop: 10 , flexDirection: 'row' , gap: 10}}>
            <Icon name='checksquare' type='antdesign' color='green' size={20}/>
            <Text>All Kind of Surgery</Text>
          </View>
          <View style={{  marginTop: 10 , flexDirection: 'row' , gap: 10}}>
            <Icon name='checksquare' type='antdesign' color='green' size={20}/>
            <Text>Castration Procedure</Text>
          </View>
          <View style={{  marginTop: 10 , flexDirection: 'row' , gap: 10}}>
            <Icon name='checksquare' type='antdesign' color='green' size={20}/>
            <Text>Cancer Treatment</Text>
          </View>
          <View style={{  marginTop: 10 , flexDirection: 'row' , gap: 10}}>
            <Icon name='checksquare' type='antdesign' color='green' size={20}/>
            <Text>Fleas and Ticks</Text>
          </View>
          
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 15,
  },
  location: {
    marginTop: 10,
  },
});

export default VetDescriptionScreen;
