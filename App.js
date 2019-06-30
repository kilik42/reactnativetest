/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

  constructor(){
    super()
    this.state = {}
  /*  this.state.customStyles={
      color: 'red'
    }
    setInterval(()=>{
      if(this.state.customStyles.color =='red'){
        this.setState({
          customStyles:{
            color: 'green'
          }
          })
      }else {
        this.setState({
          customStyles: {
            color: 'red'
          }
          })
      }

      },1000())
      */
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.half1} >


        </View>
        <View style = {styles.half2} >
            <View style = {styles.half21, styles.half2x} >
                    <Text style={styles.text}> this is 2/1</Text>

              </View>

              <View style = {[styles.half22, styles.half2x]} >

                  <Text> this is 2/2</Text>
              </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  half1: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  half2: {
    flex: 1,
    backgroundColor: 'brown',
    flexDirection: 'row',
  },
  half2x:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

  },

  half21: {

    backgroundColor: 'green',

  },
  half22: {

    backgroundColor: 'purple',

  },
  text:{
    color: 'white',
    fontSize: 30,
  }


});
