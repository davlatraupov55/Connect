import moment from "moment"

export const CommentCounter = (count) => {
return count +1
}

export const year  = moment().format('YYYY');
export const month  = moment().format('MM');
export const week  = moment().format('dddd');
export const day  = moment().format('D');
export const time  = moment().format('hhmm');