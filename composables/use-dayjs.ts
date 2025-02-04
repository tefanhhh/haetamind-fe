import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import localeData from 'dayjs/plugin/localeData'
import 'dayjs/locale/id'
import 'dayjs/locale/en'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(localeData)

dayjs.locale('id')
dayjs.tz.setDefault('Asia/Jakarta')

export default () => dayjs
