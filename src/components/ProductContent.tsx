import {
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonContent
} from '@ionic/react';

import { useState } from 'react';
import { useParams } from 'react-router';

import './ProductContent.css';

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

const ProductContent = () => {
    const [allProducts, setSingleProduct] = useState(products);
    const { id }: any = useParams();
    const singleProduct = allProducts.find(product => product.unitID === id);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return(
        <IonGrid>
            <IonRow>
                <IonCol>
                        <h2>{singleProduct!.model}</h2>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                <IonImg className='detailImg' src={singleProduct!.image}/>
                <h3>{formatter.format(singleProduct!.price)}</h3>    
                </IonCol>
                <IonCol>
                <h4>Unit Number: #{singleProduct!.unitID}</h4>
                {singleProduct!.description}
                </IonCol>
            </IonRow>
        </IonGrid>
    );
}

export default ProductContent;