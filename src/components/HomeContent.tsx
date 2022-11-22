import {
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonText
} from '@ionic/react';

import './HomeContent.css';

const HomeContent = () => (
    <IonGrid>
        <IonRow>
            <IonCol>
                <IonImg className='bgImg'src="https://as2.ftcdn.net/v2/jpg/03/34/21/13/1000_F_334211377_7LtAISCMoF3Jctwyf7iALoMfKcOhkiNi.jpg"/>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>
                <IonText className='headLine'>
                    <h3>Welcome to the Globomantics app!</h3>
                </IonText>
            </IonCol>
        </IonRow>
    </IonGrid>
);

export default HomeContent;