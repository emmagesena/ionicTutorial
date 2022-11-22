import {
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonCardTitle
} from '@ionic/react';

import { useState, useEffect } from 'react';
import './ShopListing.css';


const products = [
    {
        "model":"RoboAssistant",
        "image": "https://media.istockphoto.com/id/1187576166/vector/cute-white-robot-character-vector.jpg?s=170667a&w=0&k=20&c=lbyXTTyInnsM8p_wo_gN6U-NROteF81oEZKiE0DwqFs=",
        "unitID": "RBA6",
        "description": "Top of the line assistant",
        "price": 16570,
        "path": "/product/RBA6"
    },

    {
        "model":"RoboSurgeon 3000",
        "image": "https://media.istockphoto.com/id/1187576166/vector/cute-white-robot-character-vector.jpg?s=170667a&w=0&k=20&c=lbyXTTyInnsM8p_wo_gN6U-NROteF81oEZKiE0DwqFs=",
        "unitID": "RBS3000",
        "description": "The newest version of the RoboSurgeon",
        "price": 349999,
        "path": "/product/RBS3000"
    },

    {
        "model":"GardenBot",
        "image": "https://media.istockphoto.com/id/1187576166/vector/cute-white-robot-character-vector.jpg?s=170667a&w=0&k=20&c=lbyXTTyInnsM8p_wo_gN6U-NROteF81oEZKiE0DwqFs=",
        "unitID": "GRB3",
        "description": "Hydroponics gardening assistant",
        "price": 28999,
        "path": "/product/GRB3"
    },


]

const ShopListing = () => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const [productData, setProductData] = useState(products);

    const itemListing = productData.map((product) =>
        <IonRow key={product.unitID}>
            <IonCol>
                <IonCard button routerLink={product.path}>
                    <IonRow>

                    <IonCol>
                    <IonImg className='prodimg' src={product.image}/>
                    </IonCol>

                    <IonCol>
                    <IonCardHeader>
                        <IonCardSubtitle>{product.unitID}</IonCardSubtitle>
                        <IonCardTitle>{product.model}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonRow>
                            <IonCol>
                            {formatter.format(product!.price)}
                            </IonCol>
                        </IonRow>
                    </IonCardContent>
                    </IonCol>

                </IonRow>
                </IonCard>
            </IonCol>
        </IonRow>
    )



    return(
        <IonGrid className='myGrid'>
            <IonRow>
                <IonCol>
                    <IonText className='headline'>
                        <h3>Globomantic Shop</h3>
                    </IonText>
                </IonCol>
            </IonRow>
            {itemListing}
        </IonGrid>
    )
}

export default ShopListing;