import {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonImg,
    IonButtons,
    IonButton,
    IonBackButton
} from '@ionic/react';

import ProductContent from '../components/ProductContent';
import './Product.css';

const Product = () => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonImg className='logosmall' src='https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/34749/planet-earth-clipart-md.png'/>
                <IonButtons slot='start'>
                    <IonBackButton/>
                </IonButtons>
            </IonToolbar>
            <IonToolbar>
                <IonTitle className='newstitle' class='ion-text-center'>Product</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <ProductContent/>
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

export default Product;