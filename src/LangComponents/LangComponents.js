import React from "react";
import {Text, Dimensions} from "react-native";
import { useSelector} from "react-redux";


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


export function More () {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text  style={{fontSize: height/52, marginTop: height/30,  
            opacity: 0.8, color: '#5181EF', position: 'relative', zIndex: 50}} >ещё</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text  style={{fontSize: height/52, marginTop: height/30,  
                    opacity: 0.8, color: '#5181EF', position: 'relative', zIndex: 50}} >more</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text  style={{fontSize: height/52, marginTop: height/30,  
                    opacity: 0.8, color: '#5181EF', position: 'relative', zIndex: 50}} >ko`proq</Text>
            ) 
        }
}


export function Hide () {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text  style={{fontSize: height/52, marginTop: height/30, opacity: 0.8, color: '#5181EF' }} >скрыть</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text  style={{fontSize: height/52, marginTop: height/30, opacity: 0.8, color: '#5181EF' }} >hide</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text  style={{fontSize: height/52, marginTop: height/30, opacity: 0.8, color: '#5181EF' }} >yopish</Text>
            ) 
        }
}


export function Follow () {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text style={{color: '#5181EF', fontSize: width/27, }}  >Перейти</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text style={{color: '#5181EF', fontSize: width/27, }}  >Follow</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text style={{color: '#5181EF', fontSize: width/27, }}  >O`tish</Text>
            ) 
        }
}

export function MondayL () {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/3.1, top: height/90 }} >Понедельник</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.6, top: height/90 }} >Monday</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/3, top: height/90 }} >Dushanba</Text>
            ) 
        }
}


export function TuesdayL () {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.6, top: height/90 }} >Вторник</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.6, top: height/90 }} >Tuesday</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.8, top: height/90 }} >Seshanba</Text>
            ) 
        }
}


export function WednesdayL () {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.5, top: height/90 }} >Среда</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.9, top: height/90 }} >Wednesday</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.9, top: height/90 }} >Chorshanba</Text>
            ) 
        }
}



export function ThursdayL () {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.6, top: height/90 }} >Четверг</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.7, top: height/90 }} >Thursday</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.8, top: height/90 }} >Payshanba</Text>
            ) 
        }
}


export function FridayL () {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.6, top: height/90 }} >Пятница</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.5, top: height/90 }} >Friday</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.5, top: height/90 }} >Juma</Text>
            ) 
        }
}


export function SaturdayL () {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.6, top: height/90 }} >Суббота</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.6, top: height/90 }} >Saturday</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.6, top: height/90 }} >Shanba</Text>
            ) 
        }
}

export function ProfilePhoto () {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{fontSize: width/28,  left: width/10, color: 'black'}}>Выбрать фото профиля</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{fontSize: width/28,  left: width/10, color: 'black'}}>Select profile photo</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{fontSize: width/28,  left: width/10, color: 'black'}}>Profil rasmini tanlang</Text>
            ) 
        }
}

export function Group () {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{fontSize: width/28, marginLeft: width/18, color: 'black', marginTop:height/150 }} >Группа:</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{fontSize: width/28, marginLeft: width/18, color: 'black', marginTop:height/150 }} >Group:</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{fontSize: width/28, marginLeft: width/18, color: 'black', marginTop:height/150 }} >Guruh:</Text>
            ) 
        }
}


export function AllFav () {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{ left: width/1.13, fontSize: width/23,  color: '#5181EF'}} >Все</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{left: width/1.13, fontSize: width/23,  color: '#5181EF'}} >All</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{ left: width/1.25, fontSize: width/23,  color: '#5181EF'}} >Xammasi</Text>
            ) 
        }
}

export function TeachersRating () {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{fontSize: width/20, color: 'white'}} >Рейтинг преподователей</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{fontSize: width/20, color: 'white'}} >Teacher rating</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{fontSize: width/20, color: 'white'}} >O'qituvchilar reytingi</Text>
            ) 
        }
}


export function MyRating () {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{fontSize: width/20, color: 'white'}} >Мой рейтинг</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{fontSize: width/20, color: 'white'}} >My rating</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{fontSize: width/20, color: 'white'}} >Mening reytingim</Text>
            ) 
        }
}


export function General(props) {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text style={{fontSize: width/18, fontWeight: props.data}} >Общее</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text style={{fontSize: width/18.5, fontWeight: props.data}} >General</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text style={{fontSize: width/19, fontWeight: props.data}} >Umumiy</Text>
            ) 
        }
}



export function My(props) {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text style={{fontSize: width/18, fontWeight: props.data}} >Мои</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text style={{fontSize: width/18, fontWeight: props.data}} >My</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text style={{fontSize: width/19, fontWeight: props.data}} >Meniki</Text>
            ) 
        }
}


export function Discipline() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text style={{fontSize: width/20, color: 'black', fontWeight: '600', top: -height/4.5, left: width/20}} >Дисциплины</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{fontSize: width/20, color: 'black', fontWeight: '600', top: -height/4.5, left: width/20}} >Discipline</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text style={{fontSize: width/20, color: 'black', fontWeight: '600', top: -height/4.5, left: width/20}} >Fanlar</Text>
            ) 
        }
}


export function Video() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{fontSize: width/20, color: 'black', fontWeight: '600', top: height/50, left: width/20}} >Видеоматериалы</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{fontSize: width/20, color: 'black', fontWeight: '600', top: height/50, left: width/20}} >Video</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{fontSize: width/20, color: 'black', fontWeight: '600', top: height/50, left: width/20}} >Video</Text>
            ) 
        }
}


export function File() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{fontSize: width/20, color: 'black', fontWeight: '600', top: height/50, left: width/20}} >Файлы</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{fontSize: width/20, color: 'black', fontWeight: '600', top: height/50, left: width/20}} >File</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{fontSize: width/20, color: 'black', fontWeight: '600', top: height/50, left: width/20}} >Fayllar</Text>
            ) 
        }
}


export function AllVideo() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text style={{fontSize: width/23, left: width/1.13, top: height/70, color: '#5181EF'}} >Все</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text style={{fontSize: width/23, left: width/1.13, top: height/70, color: '#5181EF'}} >All</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text style={{fontSize: width/23, left: width/1.25, top: height/70, color: '#5181EF'}} >Xammasi</Text>
            ) 
        }
}


export function AllPublic() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text style={{fontSize: width/23, marginBottom: height/20}}>Все публикации</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text style={{fontSize: width/23}} >All publications</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text style={{fontSize: width/23}} >Barcha nashrlar</Text>
            ) 
        }
}


export function CommentsNews() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text style={{fontSize: height/40, left: height/50, top: height/40}} >Комментарии</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text style={{fontSize: height/40, left: height/50, top: height/40}} >Comments</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                   <Text style={{fontSize: height/40, left: height/50, top: height/40}} >Izohlar</Text>
            ) 
        }
}


export function Neces() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{color: 'red', left: width/3, marginBottom: height/80, opacity: 0.7, top: -height/25}} >объязательно</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{color: 'red', left: width/3, marginBottom: height/80, opacity: 0.7, top: -height/25}} >necessarily</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{color: 'red', left: width/3, marginBottom: height/80, opacity: 0.7, top: -height/25}} >majburiy</Text>
            ) 
        }
}


export function Neces2() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{color: 'red', left: width/3, marginBottom: height/80, opacity: 0.7,  top: -height/20}} >объязательно</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{color: 'red', left: width/3, marginBottom: height/80, opacity: 0.7,  top: -height/20}} >necessarily</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{color: 'red', left: width/3, marginBottom: height/80, opacity: 0.7,  top: -height/20}} >majburiy</Text>
            ) 
        }
}


export function Desirable() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{color: 'red', left: width/3, marginBottom: height/80, opacity: 0.7,  top: -height/17}} >желательно</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{color: 'red', left: width/3, marginBottom: height/80, opacity: 0.7,  top: -height/17}} >desirable</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{color: 'red', left: width/3, marginBottom: height/80, opacity: 0.7,  top: -height/17}} >ihtiyoriy</Text>
            ) 
        }
}


export function SaveAnonim() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{color: 'red', top: height/90, fontSize: width/30, opacity: 0.8}} >Ваша жалоба будет опубликована анонимно</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{color: 'red', top: height/90, fontSize: width/30, opacity: 0.8}} >Your complaint will be published anonymously</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{color: 'red', top: height/90, fontSize: width/30, opacity: 0.8}} >Shikoyatingiz anonim tarzda e'lon qilinadi</Text>
            ) 
        }
}



export function PubComplaint() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{color: '#FFF',}} >Опубликовать жалобу</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{color: '#FFF',}} >Post a complaint</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{color: '#FFF',}} >Shikoyatni yuborish</Text>
            ) 
        }
}

export function SelectLang() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text style={{fontSize: width/27, color: 'black', marginLeft: width/60}} >Выбрать язык</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text style={{fontSize: width/27, color: 'black', marginLeft: width/60}} >Select language</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text style={{fontSize: width/27, color: 'black', marginLeft: width/60}} >Tilni tanlang</Text>
            ) 
        }
}

export function Fullname() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >ФИО</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Full name</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >To'liq ism</Text>
            ) 
        }
}


export function Citizenship() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Гражданство</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Citizenship</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Fuqarolik</Text>
            ) 
        }
}


export function Passport() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Паспорт</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Passport</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Pasport</Text>
            ) 
        }
}


export function PNFL() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >ПНФЛ</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >PNFL</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >PNFL</Text>
            ) 
        }
}



export function TIN() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >ИНН</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >TIN</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >STIR</Text>
            ) 
        }
}




export function DateBirth() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Дата рождения</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Date of Birth</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Tug'ilgan sana</Text>
            ) 
        }
}


export function PlaceBirth() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Место рождения</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Place of Birth</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Tug'ilgan joyi</Text>
            ) 
        }
}



export function DirectionName() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Наименование специальности</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Name of specialty</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Mutaxassislik nomi</Text>
            ) 
        }
}



export function GroupObj() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Группа</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Group</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Guruh</Text>
            ) 
        }
}



export function YearStart() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Год приема</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Year of admission</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Qabul qilingan yil</Text>
            )
             
        }
}



export function YearFinish() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Год выпуска</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Graduation year</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Bitiruv yili</Text>
            )   
        }
}




export function SpecialityObj() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Специалист или бакалавр</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Specialist or Bachelor</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Mutaxassis yoki bakalavr</Text>
            )
        }
}




export function EduForm() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Форма обучения</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Form of study</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >O'qish shakli</Text>
            )
        }
}


export function NumberContract() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >№ и дата контракта/договора</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >No. and date of contract/agreement</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Kelishuv/shartnoma raqami va sanasi</Text>
            )
        }
}




export function StreetHomeRegion() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Постоянное место жительства</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Permanent residence</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Doimiy yashash joyi</Text>
            )
        }
}


export function StreetHome() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Наименование города, улицы, № дома и квартиры</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Name of the city, street, house and apartment number</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Shahar, ko'cha, uy va kvartiraning nomi</Text>
            )
        }
}


export function StreetStudy() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Место проживания во время учёбного процесса</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Place of residence during the educational process</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Ta'lim jarayonida yashash joyi</Text>
            )
        }
}



export function Nationality() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Национальность</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Nationality</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Millati</Text>
            )
        }
}


export function FamilyStatus() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Семейное положение</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Family status</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Oilaviy ahvol</Text>
            )
        }
}


export function Sex() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Пол</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Sex</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Jinsi</Text>
            )
        }
}


export function Diploma() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Наименование образовательного учреждения, выдавшего аттестат или диплом до поступления в филиал</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >The name of the educational institution that issued the certificate or diploma before entering the branch</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginTop: height/50, marginLeft: width/25,}} >Filialga kirishdan oldin sertifikat yoki diplom bergan ta’lim muassasasining nomi</Text>
            )
        }
}


export function SaveAndSendObj() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{color: '#FFF', fontSize: width/25}} >Сохранить изменения</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{color: '#FFF', fontSize: width/25}} >Save Changes</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{color: '#FFF', fontSize: width/25}} >O'zgarishlarni saqlash</Text>
            )
        }
}



export function LoginInLoginScreen() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginBottom: height/20, top: height/-12, fontSize: width/18, fontWeight: '500', position: 'absolute', left: width/4.3}} >Вход</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginBottom: height/20, top: height/-12, fontSize: width/18, fontWeight: '500', position: 'absolute', left: width/4.3}} >Login</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginBottom: height/20, top: height/-12, fontSize: width/18, fontWeight: '500', position: 'absolute', left: width/8}} >Tizimga kirish</Text> 
            )
        }
}




export function LoginNext() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text style={{color: 'white', fontSize: width/23}} >Далее</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text style={{color: 'white', fontSize: width/23}} >Next</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text style={{color: 'white', fontSize: width/23}} >Keyingisi</Text> 
            )
        }
}


export function LoginEnterPassword() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{fontSize: width/25, position: 'absolute', top: height/22, left: width/5.5}} >Введите пароль</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{fontSize: width/25, position: 'absolute', top: height/22, left: width/5.5}} >Enter password</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{fontSize: width/25, position: 'absolute', top: height/22, left: width/5.5}} >Parolni kiriting</Text>
            )
        }
}


export function FirstEnterPassword() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text style={{marginBottom: height/20, top: height/30, fontSize: height/40}} >Введите пароль</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginBottom: height/20, top: height/30, fontSize: height/40}} >Enter password</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginBottom: height/20, top: height/30, fontSize: height/40,}} >Parolni kiriting</Text>
            )
        }
}


export function FirstReg() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{marginBottom: height/20, top: height/-12, fontSize: width/18, fontWeight: '500', position: 'absolute', left: width/8}} >Регистрация</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{marginBottom: height/20, top: height/-12, fontSize: width/18, fontWeight: '500', position: 'absolute', left: width/7.2}} >Registration</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{marginBottom: height/20, top: height/-12, fontSize: width/18, fontWeight: '500', position: 'absolute', left: width/13}} >Ro`yxatdan o`tish</Text>
            )
        }
}



export function HaveAccount() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text style={{fontSize: width/27, }} >У меня уже есть аккаунт</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text style={{fontSize: width/27, }} >I already have an account</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text style={{fontSize: width/27, marginLeft: width/18 }} >Menda akkaunt bor</Text>
            )
        }
}


export function PickPass() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{fontSize: width/25, position: 'absolute', top: height/22, left: width/7}} >Придумайте пароль</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{fontSize: width/25, position: 'absolute', top: height/22, left: width/5.5}} >Pick a password</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{fontSize: width/25, position: 'absolute', top: height/22, left: width/6}} >Parol o'ylab toping</Text>
            )
        }
}

export function ConfirmPass() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{fontSize: width/25, position: 'absolute', top: height/22, left: width/7}} >Повторите пароль</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{fontSize: width/25, position: 'absolute', top: height/22, left: width/6.5}} >Confirm password</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{fontSize: width/25, position: 'absolute', top: height/22, left: width/7.5}} >Parolni qayta kiriting</Text>
            )
        }
}



export function Reviewed() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text style={{fontSize: width/20, color: 'black', left: width/-3.9, top: height/5.1, fontWeight: '500'}} >Рассмотренные</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text style={{fontSize: width/20, color: 'black', left: width/25, top: height/5.1, fontWeight: '500'}} >Reviewed</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text style={{fontSize: width/20, color: 'black', left: width/25, top: height/5.1, fontWeight: '500'}} >Ko'rib chiqildi</Text>
            )
        }
}



export function NewComplaintLang() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{fontSize: width/20, color: 'black', left: width/17, fontWeight: '500'}} >Новые</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{fontSize: width/20, color: 'black', left: width/17, fontWeight: '500'}} >New</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{fontSize: width/20, color: 'black', left: width/17, fontWeight: '500'}} >Yangi</Text>
            )
        }
}



export function AddNewComplaint() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
        <Text style={{color: '#FFF',}} >Создать жалобу</Text>
    )
        }else if (lang == 'eng'){
            return(
                <Text style={{color: '#FFF',}} >Create a complaint</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
                <Text style={{color: '#FFF',}} >Shikoyat yarating</Text>
            )
        }
}



export function SubjectComplaint() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(
<Text style={{fontSize: width/17, color: 'black', fontWeight: 'bold', top: -height/20, paddingLeft: width/20}} >Тема</Text>
    )
        }else if (lang == 'eng'){
            return(
<Text style={{fontSize: width/17, color: 'black', fontWeight: 'bold', top: -height/20, paddingLeft: width/20,}} >Subject</Text>
            ) 
        }else if (lang == 'uzb'){
            return(
<Text style={{fontSize: width/17, color: 'black', fontWeight: 'bold', top: -height/20, paddingLeft: width/20}} >Mavzu</Text>
            )
        }
}



export function DescriptionComplaint() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

<Text style={{fontSize: width/17, color: 'black', fontWeight: 'bold', top: -height/45, paddingLeft: width/20}} >Описание</Text>
    )
        }else if (lang == 'eng'){
            return(

<Text style={{fontSize: width/17, color: 'black', fontWeight: 'bold', top: -height/45, paddingLeft: width/20}} >Description</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

<Text style={{fontSize: width/17, color: 'black', fontWeight: 'bold', top: -height/45, paddingLeft: width/20}} >Tavsif</Text>
            )
        }
}



export function SolutionProposal() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

<Text style={{fontSize: width/17, color: 'black', fontWeight: 'bold',  paddingLeft: width/20}} >Предложение по решению</Text>
    )
        }else if (lang == 'eng'){
            return(

<Text style={{fontSize: width/17, color: 'black', fontWeight: 'bold',  paddingLeft: width/20}} >Solution proposal</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

<Text style={{fontSize: width/17, color: 'black', fontWeight: 'bold',  paddingLeft: width/20}} >Yechim taklifi</Text>
            )
        }
}




export function Supported() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

<Text>Поддержали: </Text>
    )
        }else if (lang == 'eng'){
            return(

<Text>Supported: </Text>
            ) 
        }else if (lang == 'uzb'){
            return(

<Text>Qo'llab-quvvatladi: </Text>
            )
        }
}



export function AnonimTextComplaint() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

<Text style={{color: 'red', top: height/90, fontSize: width/28, opacity: 0.8, marginTop: height/40, marginLeft: width/30}} >Ваша поддержка будет сохранена анонимно</Text>
    )
        }else if (lang == 'eng'){
            return(

<Text style={{color: 'red', top: height/90, fontSize: width/28, opacity: 0.8, marginTop: height/40, marginLeft: width/30}} >Your support will be kept anonymous</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

<Text style={{color: 'red', top: height/90, fontSize: width/28, opacity: 0.8, marginTop: height/40, marginLeft: width/30}} >Sizning ovozingiz anonim qoladi</Text>
            )
        }
}



export function Received() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

        <Text style={{color: 'white', }} >Принято</Text>
    )
        }else if (lang == 'eng'){
            return(

                <Text style={{color: 'white', }} >Received</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

                <Text style={{color: 'white', }} >Qabul qildi</Text>
            )
        }
}



export function Rejected() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

        <Text style={{color: 'white', }} >Отклонено</Text>
    )
        }else if (lang == 'eng'){
            return(

                <Text style={{color: 'white', }} >Rejected</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

                <Text style={{color: 'white', }} >Rad etildi</Text>
            )
        }
}


export function ResponseManager() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

        <Text style={{ top: height/80,fontSize: width/17, color: 'black', fontWeight: 'bold', paddingLeft: width/20}} >Ответ от руководства</Text>
    )
        }else if (lang == 'eng'){
            return(

                <Text style={{ top: height/80,fontSize: width/17, color: 'black', fontWeight: 'bold', paddingLeft: width/20}} >Response from management</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

                <Text style={{ top: height/80,fontSize: width/17, color: 'black', fontWeight: 'bold', paddingLeft: width/20}} >Rahbariyat javobi</Text>
            )
        }
}


export function ReviewsTeacher() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

        <Text style={{fontSize: width/25, top: height/80, marginBottom: height/45}} >Отзывы</Text>
    )
        }else if (lang == 'eng'){
            return(

         <Text style={{fontSize: width/25, top: height/80, marginBottom: height/45}} >Reviews</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

        <Text style={{fontSize: width/25, top: height/80, marginBottom: height/45}} >Sharhlar</Text>
            )
        }
}




export function RateTeacher() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

        <Text style={{position: 'relative', fontSize: height/45, top: -height/12}} >Оцените преподователя</Text>
    )
        }else if (lang == 'eng'){
            return(

                <Text style={{position: 'relative', fontSize: height/45, top: -height/12}} >Rate the teacher</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

                <Text style={{position: 'relative', fontSize: height/45, top: -height/12}} >O'qituvchiga baho bering</Text>
            )
        }
}



export function TeacherBranch() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

<Text style={{fontSize: height/42, color: '#0099cc', top: height/40, left: width/25, marginBottom: height/30}} >Выберите отделение преподователя</Text>
    )
        }else if (lang == 'eng'){
            return(

<Text style={{fontSize: height/42, color: '#0099cc', top: height/40, left: width/25, marginBottom: height/30}} >Choose a teacher's department</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

<Text style={{fontSize: height/42, color: '#0099cc', top: height/40, left: width/25, marginBottom: height/30}} >O'qituvchi bo'limini tanlang</Text>
            )
        }
}




export function TeacherMore() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

<Text style={{position: 'absolute', fontSize: width/30, top: height/17.2, left: width/1.32, color: 'green'}} >Подробнее</Text>
    )
        }else if (lang == 'eng'){
            return(

<Text style={{position: 'absolute', fontSize: width/30, top: height/17.2, left: width/1.32, color: 'green'}} >More</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

<Text style={{position: 'absolute', fontSize: width/30, top: height/17.2, left: width/1.32, color: 'green'}} >Ko'proq</Text>
            )
        }
}




export function YouCanRest() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

        <Text style={{color: 'white'}} >Сегодня нет пар. Можете отдыхать</Text>
    )
        }else if (lang == 'eng'){
            return(

                <Text style={{color: 'white'}} >There are no couples today. You can rest</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

                <Text style={{color: 'white'}} >Bugun juftliklar yo'q. Siz dam olishingiz mumkin</Text>
            )
        }
}


export function RatingSave() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

        <Text style={{color: "white", fontSize: height/45}} >Сохранить</Text>
    )
        }else if (lang == 'eng'){
            return(

                <Text style={{color: "white", fontSize: height/45}} >Save</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

                <Text style={{color: "white", fontSize: height/45}} >Saqlash</Text>
            )
        }
}


export function Vitae() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

        <Text style={{fontSize: width/27, color: 'black', marginLeft: width/60}} >Объективка</Text>
    )
        }else if (lang == 'eng'){
            return(

                <Text style={{fontSize: width/27, color: 'black', marginLeft: width/60}} >curriculum vitae</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

                <Text style={{fontSize: width/27, color: 'black', marginLeft: width/60}} >Rezyume</Text>
            )
        }
}





export function MoreComplaint22() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

        <Text style={{textAlign: 'center', color: '#242222', opacity: 0.8, marginLeft: width/5.5, fontSize: width/28 }}>Подробно</Text>
    )
        }else if (lang == 'eng'){
            return(

                <Text style={{textAlign: 'center', color: '#242222', opacity: 0.8, marginLeft: width/5.5, fontSize: width/28 }}>More</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

                <Text style={{textAlign: 'center', color: '#242222', opacity: 0.8, marginLeft: width/5.5, fontSize: width/28 }}>Ko'proq</Text>
            )
        }
}



export function MoreComplaint1() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

        <Text style={{textAlign: 'center', color: '#242222', opacity: 0.8, marginLeft: width/10, fontSize: width/28 }}>Подробно</Text>
    )
        }else if (lang == 'eng'){
            return(

                <Text style={{textAlign: 'center', color: '#242222', opacity: 0.8, marginLeft: width/10, fontSize: width/28 }}>More</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

                <Text style={{textAlign: 'center', color: '#242222', opacity: 0.8, marginLeft: width/10, fontSize: width/28 }}>Ko`proq</Text>
            )
        }
}


export function NotReviews() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

<Text style={{fontSize: height/52, left: width/3.8}} >Пока нет отзывов.</Text>
    )
        }else if (lang == 'eng'){
            return(

<Text style={{fontSize: height/52, left: width/3.8}} >There are no reviews yet.</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

<Text style={{fontSize: height/52, left: width/3.8}} >Hozircha sharhlar yo'q.</Text>
            )
        }
}




export function ComplaintJoin() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

<Text style={{color: '#FFF',}} >Поддержать</Text>
    )
        }else if (lang == 'eng'){
            return(

<Text style={{color: '#FFF',}} >Support</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

<Text style={{color: '#FFF',}} >Qo'llab-quvvatlash</Text>
            )
        }
}



export function NotCommentsYet() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

        <Text style={{fontSize: height/50, left: width/3, top: height/20}} >Нет Комментариев</Text>
    )
        }else if (lang == 'eng'){
            return(

                <Text style={{fontSize: height/50, left: width/3, top: height/20}} >No comments yet</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

                <Text style={{fontSize: height/50, left: width/3, top: height/20}} >Hozircha izohlar yo‘q</Text>
            )
        }
}




export function VitaeScreen() {
    const lang = useSelector((state) => state.lang);
   if (lang == 'ru'){
    return(

        <Text style={{fontSize: width/25, color: 'black', marginLeft: width/30, marginTop: height/80}} >Объективка</Text>
    )
        }else if (lang == 'eng'){
            return(

                <Text style={{fontSize: width/25, color: 'black', marginLeft: width/30, marginTop: height/80}} >curriculum vitae</Text>
            ) 
        }else if (lang == 'uzb'){
            return(

                <Text style={{fontSize: width/25, color: 'black', marginLeft: width/30, marginTop: height/80}} >Rezyume</Text>
            )
        }
}