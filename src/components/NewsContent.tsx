import {
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent
} from '@ionic/react';

import './NewsContent.css';

const NewsContent = () => (
    <IonGrid>
        <IonRow>
            <IonCol>
                <IonCard>
                    <IonImg className="newsImg"
                    src="https://thumbs.dreamstime.com/b/businessman-reading-news-articles-tablet-screen-online-newspaper-press-mass-media-concept-desk-top-angle-view-horizontal-218753013.jpg"/>
                    <IonCardHeader>
                        <IonCardSubtitle> #hastag </IonCardSubtitle>
                        <IonCardTitle> New Update </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        There is a new update that has been added.
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonImg className="newsImg"
                    src="https://thumbs.dreamstime.com/b/businessman-reading-news-articles-tablet-screen-online-newspaper-press-mass-media-concept-desk-top-angle-view-horizontal-218753013.jpg"/>
                    <IonCardHeader>
                        <IonCardSubtitle> #hastag </IonCardSubtitle>
                        <IonCardTitle> Jane Doe named CEO </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        Jane Doe was named CEO after 14 years.
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    </IonGrid>
);

export default NewsContent;
