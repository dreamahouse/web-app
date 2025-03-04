import { Flex, Image } from "antd"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"

const IconText = () => {
    const list = [
        {
            id: '1',
            title: '成本低、速度快',
            description: '交易的成本平均起來不到0.01美元，而且可以在一秒鐘內完成。',
            url: icon1
        },
        {
            id: '2',
            title: '成本低、速度快',
            description: '交易的成本平均起來不到0.01美元，而且可以在一秒鐘內完成。',
            url: icon2
        },
        {
            id: '3',
            title: '成本低、速度快',
            description: '交易的成本平均起來不到0.01美元，而且可以在一秒鐘內完成。',
            url: icon3
        },
    ]
    return (
        <Flex gap='207px' style={{ width: '1352px', height: '354px', margin: '88px auto' }}>
            {
                list.map(item => (
                    <Flex vertical key={item.id}>
                        <Image src={item.url} width='110px' preview={false} />
                        <div style={{ marginLeft: '60px', marginTop: '48px' }}>
                            <h4 style={{ fontSize: '32px', fontWeight: 'normal', color: '#fff' }}>{item.title}</h4>
                            <p style={{ fontSize: '18px', fontWeight: 'normal', color: '#97959E' }}>{item.description}</p>
                        </div>
                    </Flex>
                ))
            }
        </Flex>

    )
}
export default IconText