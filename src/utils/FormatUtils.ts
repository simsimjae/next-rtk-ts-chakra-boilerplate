import { formatSI } from 'format-si-prefix';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

const FormatUtils = {
  si: (count: number) => {
    if (!count) return 0;
    return formatSI(count);
  },
  timeBefore: (fromTimestamp: number) => {
    dayjs.locale('ko');
    const now = dayjs().valueOf();
    const formattedTime = dayjs(fromTimestamp).format('YYYY-MM-DD(dd)');
    const monthBefore = dayjs(now).diff(fromTimestamp, 'month');
    const dayBefore = dayjs(now).diff(fromTimestamp, 'day');
    const hourBefore = dayjs(now).diff(fromTimestamp, 'hour');
    const minuteBefore = dayjs(now).diff(fromTimestamp, 'minute');
    if (monthBefore >= 12) return formattedTime;
    else if (monthBefore > 0) return `${monthBefore}달 전`;
    else if (dayBefore > 0) return `${dayBefore}일 전`;
    else if (hourBefore > 0) return `${hourBefore}시간 전`;
    else if (minuteBefore > 0) return `${minuteBefore}분 전`;
    else return '방금 전';
  },
};

export default FormatUtils;
