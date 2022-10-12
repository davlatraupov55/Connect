import React from "react";
import { Dimensions, View, Image} from "react-native";
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Monday';
import Thursday from './Tuesday';
import Friday from './Monday';
import Saturday from './Tuesday';
import shortid from 'shortid';
import {FridayL, MondayL, SaturdayL, ThursdayL, TuesdayL, WednesdayL} from '../LangComponents/LangComponents';

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


export default function ListComponent(props) {
const day1 = props.data[0].Monday;
const day2 = props.data[1].Tuesday;
const day3 = props.data[2].Wednesday;
const day4 = props.data[3].Thursday;
const day5 = props.data[4].Friday;
const day6 = props.data[5].Saturday;

    return(
        <View>

            <View style={{ marginTop: height/100, height: height/2.22, width: width-width/30, borderRadius: 10, backgroundColor: "white",}}  >
            <MondayL/>
<Image style={{ height: height/35, width: height/35, left:width/20, top: -height/55}} source = {require('../img/clock.png')}  />
<Image style={{ height: height/40, width: height/45, left:width/1.14, top: -height/23}} source = {require('../img/door.png')}  />

{ day1.map(item =>(
<Monday data={item} key={shortid.generate()} />
 ))
}
<View style={{height:height-height/1.78, width:1, backgroundColor: 'black', marginLeft: width/6.3, marginTop: -height/2.35, opacity: 0.3, position: 'relative'}} ></View>
<View style={{height:height-height/1.78, width:1, backgroundColor: 'black',marginLeft: width/1.23, marginTop: -height/2.28, opacity: 0.3, position: 'relative'}} ></View>
    </View>





    <View style={{ marginTop: height/100, height: height/2.22, width: width-width/30, borderRadius: 10, backgroundColor: "white",}}  >
<TuesdayL/>
<Image style={{ height: height/35, width: height/35, left:width/20, top: -height/55}} source = {require('../img/clock.png')}  />
<Image style={{ height: height/40, width: height/45, left:width/1.14, top: -height/23}} source = {require('../img/door.png')}  />
{ day2.map(item =>(
<Tuesday data={item} key={shortid.generate()} />
 ))
}
<View style={{height:height-height/1.78, width:1, backgroundColor: 'black', marginLeft: width/6.3, marginTop: -height/2.35, opacity: 0.3, position: 'relative'}} ></View>
<View style={{height:height-height/1.78, width:1, backgroundColor: 'black',marginLeft: width/1.23, marginTop: -height/2.28, opacity: 0.3, position: 'relative'}} ></View>
    </View>


    
    <View style={{ marginTop: height/100, height: height/2.22, width: width-width/30, borderRadius: 10, backgroundColor: "white",}}  >
<WednesdayL/>
<Image style={{ height: height/35, width: height/35, left:width/20, top: -height/55}} source = {require('../img/clock.png')}  />
<Image style={{ height: height/40, width: height/45, left:width/1.14, top: -height/23}} source = {require('../img/door.png')}  />
{ day3.map(item =>(
<Wednesday data={item} key={shortid.generate()} />
 ))
}
<View style={{height:height-height/1.78, width:1, backgroundColor: 'black', marginLeft: width/6.3, marginTop: -height/2.35, opacity: 0.3, position: 'relative'}} ></View>
<View style={{height:height-height/1.78, width:1, backgroundColor: 'black',marginLeft: width/1.23, marginTop: -height/2.28, opacity: 0.3, position: 'relative'}} ></View>
    </View>



    <View style={{ marginTop: height/100, height: height/2.22, width: width-width/30, borderRadius: 10, backgroundColor: "white",}}  >
<ThursdayL/>
<Image style={{ height: height/35, width: height/35, left:width/20, top: -height/55}} source = {require('../img/clock.png')}  />
<Image style={{ height: height/40, width: height/45, left:width/1.14, top: -height/23}} source = {require('../img/door.png')}  />
{ day4.map(item =>(
<Thursday data={item} key={shortid.generate()} />
 ))
}
<View style={{height:height-height/1.78, width:1, backgroundColor: 'black', marginLeft: width/6.3, marginTop: -height/2.35, opacity: 0.3, position: 'relative'}} ></View>
<View style={{height:height-height/1.78, width:1, backgroundColor: 'black',marginLeft: width/1.23, marginTop: -height/2.28, opacity: 0.3, position: 'relative'}} ></View>
    </View>


    <View style={{ marginTop: height/100, height: height/2.22, width: width-width/30, borderRadius: 10, backgroundColor: "white",}}  >
<FridayL/>
<Image style={{ height: height/35, width: height/35, left:width/20, top: -height/55}} source = {require('../img/clock.png')}  />
<Image style={{ height: height/40, width: height/45, left:width/1.14, top: -height/23}} source = {require('../img/door.png')}  />
{ day5.map(item =>(
<Friday data={item} key={shortid.generate()} />
 ))
}
<View style={{height:height-height/1.78, width:1, backgroundColor: 'black', marginLeft: width/6.3, marginTop: -height/2.35, opacity: 0.3, position: 'relative'}} ></View>
<View style={{height:height-height/1.78, width:1, backgroundColor: 'black',marginLeft: width/1.23, marginTop: -height/2.28, opacity: 0.3, position: 'relative'}} ></View>
    </View>


    <View style={{ marginTop: height/100, height: height/2.22, width: width-width/30, borderRadius: 10, backgroundColor: "white",}}  >
<SaturdayL/>
<Image style={{ height: height/35, width: height/35, left:width/20, top: -height/55}} source = {require('../img/clock.png')}  />
<Image style={{ height: height/40, width: height/45, left:width/1.14, top: -height/23}} source = {require('../img/door.png')}  />
{ day6.map(item =>(
<Saturday data={item} key={shortid.generate()} />
 ))
}
<View style={{height:height-height/1.78, width:1, backgroundColor: 'black', marginLeft: width/6.3, marginTop: -height/2.35, opacity: 0.3, position: 'relative'}} ></View>
<View style={{height:height-height/1.78, width:1, backgroundColor: 'black',marginLeft: width/1.23, marginTop: -height/2.28, opacity: 0.3, position: 'relative'}} ></View>
    </View>





        </View>
    )


}