import {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonImg,
    IonButtons,
    IonBackButton,
    IonButton,
    createGesture,
    Gesture,
    useIonViewDidEnter
} from '@ionic/react';

import {useRef} from 'react';
import {useHistory} from 'react-router';
import NewsContent from '../components/NewsContent';
import './News.css';

const News = () => {

    const pageRef = useRef();
    const history = useHistory();

    const onSwipe = () => {
        history.push('/home');
    }

    useIonViewDidEnter(() => {
        const gesture: Gesture = createGesture({
            el : pageRef.current!,
            threshold: 0,
            gestureName: 'my-swipe',
            direction: "x",
            onMove: (event: {deltaX: number;}) => {
                if(event.deltaX > 200){
                    onSwipe();
                }
            }
        });
        gesture.enable();
    });

    return(
        <IonPage ref={pageRef}>
            <IonHeader>
                <IonToolbar className='newsheader'>
                    <IonImg className='logosmall'
                    src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/34749/planet-earth-clipart-md.png"/>
                    <IonButtons slot='end'>
                        <IonButton routerLink='/home'>Back to Home</IonButton>
                    </IonButtons>
                </IonToolbar>
                <IonToolbar>
                    <IonTitle className='newstitle' class='ion-text-center'>News</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <NewsContent/>
            </IonContent>

            <IonFooter>
                <IonToolbar>
                    <IonButtons slot='end'>
                        <IonTitle size='small'></IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default News;
