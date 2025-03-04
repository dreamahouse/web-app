import { Button, Dropdown, Flex, Image, Layout } from 'antd';
import { useTranslation } from 'react-i18next';
import "./App.scss";
import bg3 from "./assets/bg3.png";
import content1 from "./assets/content1.png";
import language from "./assets/language.png";
import logo from "./assets/logo.png";
import table from "./assets/table.png"
import ContactUs from './components/ContactUs';
import IconText from './components/IconText';
import ImageContent from './components/ImageContent';
import SliderContent from './components/SliderContent';
import GradientText from './components/GradientText';
import SplitText from './components/SplitText'
const { Footer, Content } = Layout
const List = new Array(8).fill(5)
const headerStyle = {
  backgroundImage: `url(${content1})`, backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: '32px 170px 0',
  minHeight: '1222px',

};
const bacc = "#010101"
const contentStyle = {
  miniHeight: 'calc(100vh - 104px )',
  backgroundColor: bacc
};
const footerStyle = {
  width: '100%',
  margin: '0 auto',
  padding: '0',
  background: 'linear-gradient(180deg, red 0%, rgba(0, 15, 38, 0) 100%)!important',
};

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  backgroundColor: bacc
};
const h2Style = {
  fontSize: '56px',
  fontWeight: 'normal',
  color: '#fff',
  textAlign: 'center',
  backgroundColor: bacc,

}
const bg3Style = {
  width: '100%',
  height: '862px',
  position: 'relative',
  overflow: 'hidden'
}
const img3Style = {
  width: '1380px',
  height: '862px',
  position: 'absolute',
  right: '0',
  top: '0'
}
const text3Style = {
  position: 'absolute',
  top: '50%',
  left: '171px',
  height: '500px',
  marginTop: '-315px',
  zIndex: '222'
}
const h3Style = {
  fontSize: '32px',
  fontWeight: 'normal',
  color: '#f5f5f5'
}
const items = [
  {
    label: '繁體中文',
    key: 'zh',
  },
  {
    label: 'English',
    key: 'en',
  },
  {
    label: '日本語',
    key: 'ja',
  },
  {
    label: '한국어',
    key: 'ko',
  },
];
function App() {
  const { t, i18n } = useTranslation();
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  const onClick = ({ key }) => {
    console.log(key);
    // 获取当前语言
    // console.log('获取语言：', i18n.language);
    i18n.changeLanguage(key)
  };
  return (
    <Flex>
      <Layout style={layoutStyle}>
        <header className='header' style={headerStyle}>
          <Flex justify="space-between" align='center' style={{ height: '64px', paddingInline: 48, lineHeight: '64px' }}>
            <div>
              <Image src={logo} width={200} preview={false} />
            </div>
            <div>
              <Button type='text' >{t('home.product')}</Button>
              <Button type='text' >{t('home.find')}</Button>
              <Button type='text' >{t('home.manager')}</Button>
              <Button type='text' >{t('home.net')}</Button>
              <Button type='text' >{t('home.join')}</Button>
              <Dropdown menu={{ items, onClick }} trigger={['click']} >

                <Image src={language} width={25} preview={false} className='language' />

              </Dropdown>
            </div>
          </Flex>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '500px', minHeight: '300px', marginTop: '234px', justifyContent: 'space-around' }}>
              <h2 style={{ textAlign: "left", fontSize: '80px', color: 'white' }}>歡迎進入<br />ZNP網絡</h2>
              <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class" >全球第一條內RWA賽道而誕生的零知識證明区块链</GradientText>
              <Button style={{
                width: '364px',
                height: '80px',
                background: 'linear-gradient( 114deg, #728DD0 0%, #052C8F 100%)',
                boxShadow: '0px 0px 0px 3px rgba(255,255,255,0.06)',
                borderRadius: '16px 16px 16px 16px',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white'
              }}>開始搭建</Button>
            </div>
          </div>
        </header>
        <Content style={contentStyle}>
          <SliderContent />
          <div style={{ padding: '0 170px' }}>
            <h2 style={{
              ...h2Style, marginBottom: '124px', paddingTop: '280px'
            }}><SplitText
                text="讓零知識更加充滿生態活力"
                className="text-2xl font-semibold text-center"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              /></h2>
            <ImageContent type="left" />
            <ImageContent type="right" />
          </div>
          <div>
            <h2 style={{ ...h2Style, marginBottom: '124px', paddingTop: '280px' }}>
              <SplitText
                text="產品介紹"
                className="text-2xl font-semibold text-center"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              /></h2>

            <div style={bg3Style}>
              <div style={text3Style}>
                <h3 style={h3Style}>四核心兩卡伺服器配置（普通AMD平台）</h3>
                <div style={{ width: '620px', marginTop: '130PX' }}>
                  <Image src={table} preview={false} />
                </div>
              </div>
              <div style={img3Style}>
                <Image src={bg3} preview={false} />
              </div>
            </div>
          </div>
          <div style={{ marginTop: '340px', marginBottom: '200px' }}>
            <h2 style={h2Style}><SplitText
              text="構建RWA全新世界"
              className="text-2xl font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            /></h2>
            <h3 style={{ fontSize: '24px', fontWeight: 'normal', color: '#97959E', marginTop: '32px', textAlign: 'center' }}>數百個的defi、金融和資產證券化都打包在一起，保險都以zpn為家。我們非常重視與夥伴的合作關係和協作，不斷推動區塊鏈技術的先進發展。</h3>
            <IconText />
          </div>
          <div>
            <h2 style={h2Style}><SplitText
              text="加入社區"
              className="text-2xl font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            /></h2>
            <ContactUs />
          </div>
          <div>
            <h2 style={{ ...h2Style, marginTop: '164px', marginBottom: '48px' }}><SplitText
              text="最新资讯"
              className="text-2xl font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            /></h2>
            <Flex gap='20px' className='newsContainer'>
              {List.map((_, index) => (
                <Flex vertical justify='space-between' flex='none' key={index} style={{ padding: '34px 24px', backgroundColor: '#0E0F1A', color: '#fff', borderRadius: '16px', border: '1px solid #222438', width: '340px', height: '340px' }}>
                  <p style={{ fontSize: '15px', color: '#F9FCFF', fontWeight: '500', lineHeight: '22px' }}>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Illo cumque amet
                    asperiores quis beataeveniam dolores natus ducimus
                    magnam rerum officiis mollitia, maxime quidem
                    vitae illum quo aliquid quasi consequatur.
                  </p>
                  <Flex justify='space-between'>
                    <p style={{ fontSize: '16px', color: '#fff', fontWeight: 'normal', lineHeight: '24px' }}>Ondřej Časta</p>
                    <Image src={"https://api.dicebear.com/7.x/miniavs/svg?seed=8"} width={40} preview={false} />
                  </Flex>
                </Flex>
              ))}

            </Flex>
          </div>

        </Content>

        <footer style={footerStyle}>
          <div>
            <div style={{ textAlign: 'center', paddingTop: '340px' }}>
              <Image src={logo} width="256px" preview={false} />
            </div>
            <table>
              <thead>
                <tr>
                  <th>產品中心</th>
                  <th>發現</th>
                  <th>治理</th>
                  <th>加入我們</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href=''>我們的願景</a></td>
                  <td><a href=''>生態系統</a></td>
                  <td><a href=''>關於我們</a></td>
                  <td><a href=''>Twitter</a></td>
                </tr>
                <tr>
                  <td><a href=''>白皮書</a></td>
                  <td><a href=''>部落格</a></td>
                  <td><a href=''>徵才</a></td>
                  <td><a href=''>Telegram</a></td>
                </tr>
                <tr>
                  <td><a href=''>解決方案</a></td>
                  <td><a href=''>資訊</a></td>
                  <td><a href=''>隱私合約</a></td>
                  <td><a href=''>Email</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.12)', width: '1578px', height: '1px', margin: '0 auto', marginTop: '124px' }} />
          <p style={{ textAlign: 'center', marginTop: '124px', color: '#A0A0B8', height: '40px', lineHeight: '40px', margin: '0', fontSize: '12px', fontWeight: '500' }}>© 2025 Zero-Knowledge-Network. Reserve all rights</p>
        </footer>
      </Layout>
    </Flex>
  )
}

export default App
