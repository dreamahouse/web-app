import { Image } from "antd"
import bg1 from "../assets/bg1.png"
import bg2 from "../assets/bg2.png"

const ImageContent = ({ type }) => {
    const divStyle = {
        width: '100%',
        // height: '724px',
        position: 'relative',
        borderRadius: '28px',
        border: '2px solid #1E1F30'
    }

    const textStyle = {
        textAlign: 'left',
        color: 'white',
        width: '520px',
        height: '145px',
        position: 'absolute',
        top: '50%',
        marginTop: '-73px',
    }
    const h2Style = {
        fontSize: '40px',
        fontWeight: 'normal',
        color: 'white'
    }
    const h3Style = {
        fontSize: '24px',
        fontWeight: 'normal',
        color: '#95979E'
    }
    return (
        <div>

            {
                type === 'left' ? (
                    <div style={divStyle}>
                        <Image src={bg1} width="100%" style={{ borderRadius: "28px" }} preview={false} />
                        <div style={{ ...textStyle, left: '28px' }}>
                            <h2 style={h2Style}>我們熱衷於打造RWA賽道<br />的確定性，完全去中心化</h2>
                            <h3 style={h3Style}>更快更安全的鏈上資產同步</h3>
                        </div></div>
                ) : (
                    <div style={{ ...divStyle, marginTop: '32px' }}>
                        <Image src={bg2} width="100%" style={{ borderRadius: "28px" }} preview={false} />
                        <div style={{ ...textStyle, right: '28px' }}>
                            <h2 style={h2Style}>我們用「心」讓性能更勝一籌</h2>
                            <h3 style={h3Style}>Zpn礦機使用了獨特的sOc可編程晶片，搭載了64GB的零知證明加速卡zkp4000，專門為提升計算能力而設計。</h3>
                        </div>
                    </div>
                )
            }

        </div>
    )
}
export default ImageContent