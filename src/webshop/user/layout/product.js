import { Card, Typography } from 'antd';
import React from 'react';
const { Text } = Typography;
const ProductComponent = (props) => {
    const data = props.data;
    const name = data.p_name + '';
    const cutString = (str = '') => {
        let result = '';
        if (str.length > 40) {
            result = str.substring(0, 40) + '...';
        } else {
            result = str
        }
        return result;
    }
    return (
        
                 <Card
                hoverable
                style={{ width: '100%' }}
                onClick={() => props.click(data.id, data.P_category)}
            >
                <div className="position-relative" style={{ minHeight: '180px' }}>
                    <img src={data.p_img} alt="Photo 3" className="img-fluid" style={{ width: '100%' }} />
                    {parseInt(data.p_promotion) !== 0 ?
                    <div className="ribbon-wrapper ribbon-lg">
                        <div className="ribbon bg-success text-lg">
                            {props.product}
                        </div>
                    </div> : null
                    }
                    
                </div>
                <Text style={{ fontSize: 20 - 5 }}>{cutString(name)}</Text>
                <p className="text-right">
                    {parseInt(data.p_promotion) === 0 ?
                        <Text style={{ color: 'red', fontSize: 20 - 4 }}>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(data.p_price)}</Text> :
                        <Text style={{ color: 'red', fontSize: 20 - 4 }}>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(data.p_promotion)}</Text>
                    }

                </p>

            </Card>
           

    )
}
export default ProductComponent;