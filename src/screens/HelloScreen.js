import React from 'react';
import {
  View,
  Dimensions,
  ScrollView
} from 'react-native';
import FirstDot from '../Components/HelloScreen/FirstDot'
import SecondDot from '../Components/HelloScreen/SecondDot'
import LastDot from '../Components/HelloScreen/LastDot'
import HelloScreenButton from '../Components/HelloScreen/HelloScreenButton'


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


class HelloScreen extends React.Component {
  state = {
    dot1: '#0277FA',
    dot2: '#858585',
    dot3: '#858585',
    dot: 'red',

    dotPosition1: width/30,
    doWidth1: height/45,
    doHeight1: height/45,
    doTop: height/1.132,
    disp: 'none',

    Text: {
      welcome: 'Добро пожаловать!',
      welcome2: 'Свода и новые возможности',
      welcome3: 'вместе с Connect',
      secondDot1: 'Получайте необходимую вам информацию быстро и удобно',
      secondDot2: 'Вносите свой вклад на улучшение качества оброзования',
      lastDot1: 'Чтобы начать работу, нам необходимо убедиться',
      lastDot2: 'что вы обучаетесь именно в этом ВУЗе',
      start: 'Начать',

    }
  }


  render(){
  const handleScroll = ({nativeEvent}) => {
    const Offset = height/45
    const calculatedWidth = Offset + (nativeEvent.contentOffset.x/9);
    const calculatedHeight = Offset + (nativeEvent.contentOffset.x/30);

      this.setState({doWidth1: calculatedWidth})

      if(calculatedWidth - Offset > width/5.5){
        this.setState({doWidth1: calculatedWidth*1.5})
        this.setState({doHeight1: calculatedHeight})
        this.setState({doTop: height/1.124 })
        this.setState({disp: 'flex' })
        this.setState({dotPosition1: width/-80})

      }else{
        this.setState({doHeight1: height/45})
        this.setState({doTop: height/1.113 })
        this.setState({disp: 'none' })
        this.setState({dotPosition1: width/30 })
      }

  };
  const doHeight1 = this.state.doHeight1;
  const doWidth1 = this.state.doWidth1;
  const dot1 = this.state.dot1;
  const dotPosition1 = this.state.dotPosition1;
  const disp = this.state.disp
  const FirstDotData = [this.state.welcome, this.state.welcome2, this.state.welcome3 ]
  const SecondDotData = [this.state.secondDot1, this.state.secondDot2]
  const LastDotData = [this.state.lastDot1, this.state.lastDot2]
  const DATA = {doHeight1: doHeight1, doWidth1: doWidth1, dot1: dot1, dotPosition1: dotPosition1, disp: disp}

  return (
    <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center'}} >
<ScrollView
showsHorizontalScrollIndicator={false}
pagingEnabled={true}
horizontal
onScroll={handleScroll}
scrollEventThrottle={1}
>
<FirstDot data={FirstDotData} />
<SecondDot data={SecondDotData}/>
<LastDot data={LastDotData}/>
</ScrollView>

<View style={{height: height/30, width: width/3, position: 'relative', top: height/-17, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}} >

<HelloScreenButton data={DATA} lang={this.state.start} />


<View style={{height: height/45, width:  height/45, borderRadius: height/45, position: 'absolute', backgroundColor: this.state.dot2, marginLeft: width/15}} ></View>
<View style={{height: height/45, width:  height/45, borderRadius: height/45, position: 'absolute', backgroundColor: this.state.dot3, marginLeft: width/15, left: width/5}} ></View>
</View>
   </View>
  )
  }
};

export default HelloScreen