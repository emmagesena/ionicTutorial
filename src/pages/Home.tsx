import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonFooter,
  IonButton,
  IonButtons,
  IonIcon,
  IonImg
 } from '@ionic/react';

import { logoTwitter, logoInstagram, logoFacebook } from "ionicons/icons";
import HomeContent from '../components/HomeContent';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonImg className='logo' src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/34749/planet-earth-clipart-md.png"/>
          <IonButtons slot='end'>
            <IonButton routerLink='/news'>News</IonButton>
            <IonButton routerLink='/shop'>Shop</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Globomantics</IonTitle>
          </IonToolbar>
        </IonHeader>
        <HomeContent/>
      </IonContent>
      <IonFooter>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon slot="icon-only" icon={logoTwitter}></IonIcon>
          </IonButton>
          <IonButton>
            <IonIcon slot="icon-only" icon={logoInstagram}></IonIcon>
          </IonButton>
          <IonButton>
            <IonIcon slot="icon-only" icon={logoFacebook}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonTitle size="small"> Globomantics Corp 2022</IonTitle>
        </IonButtons>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
