import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Rate,
  Typography,
  Space,
  Divider,
  Card,
} from 'antd'
import { useEffect, useState } from 'react'

const { Option } = Select
const { Title } = Typography

function Home(props: { name: string }) {
  const [data, setData] = useState<Array<number>>([])

  useEffect(() => {
    Array.from(Array(100000).keys()).forEach((el) => {
      setData((prev) => [el, ...prev].slice(0, 19))
    })
  }, [])

  return (
    <>
      {data.map((item) => (
        <div key={item}>
          <Typography style={{ color: 'red' }}>{item}</Typography>
        </div>
      ))}
    </>
  )
}

export default Home

export const getServerSideProps = () => ({
  props: {
    name: 'SSR Page',
  },
})
