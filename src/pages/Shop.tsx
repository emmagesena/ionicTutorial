import {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonImg,
    IonToolbar,
    CreateAnimation,
    IonButtons,
    IonButton,
    IonFooter
} from '@ionic/react';

import ShopListing from '../components/ShopListing';
import './Shop.css';

const Shop = () => (
    <IonPage>
        <IonHeader>
            <IonToolbar className='newsheader'>
                <CreateAnimation
                duration={2000}
                iterations={5}
                keyframes= {[
                    {offset: 0, transform:'scale(1)', opacity: '0.5' },
                    {offset: 0.5, transform:'scale(0.8)', opacity: '1' },
                    {offset: 0.7, transform:'scale(1)', opacity: '0.5' },
                    {offset: 1, transform:'scale(0.8)', opacity: '1' }
                ]}
                play={true}
                >
                    <IonImg className="logosmall" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/34749/planet-earth-clipart-md.png"/>
                </CreateAnimation>

                <IonButtons slot="end">
                   <IonButton routerLink='/home'>Back to Home</IonButton>
                </IonButtons>
                

                <IonTitle className='newstitle' class='ion-text-center'>Shop</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <ShopListing/>
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

export default Shop;