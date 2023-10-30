
... 
... //% color="#AA278D" weight=100
... namespace linenotify {
...     
...     
...     // Import Axios
...     import axios from 'axios';
... 
... 
... 
...     //% block="Token $accessToken msg $message"
...     // ฟังก์ชันสำหรับส่งข้อความไปยัง Line Notify
...     export function sendLineNotifyMessage(message: string,accessToken:string) {
...         const url = 'https://notify-api.line.me/api/notify';
...         const data = `message=${message}`;
...         const headers = {
...             'Authorization': `Bearer ${accessToken}`,
...             'Content-Type': 'application/x-www-form-urlencoded',
...         };
... 
...     // ส่ง HTTP POST ไปยัง Line Notify
...         axios.post(url, data, { headers })
...             .then((response) => {
...                 console.log(response.data);
...             })
...             .catch((error) => {
...                 console.error(error);
...             });
... }
... 
... 


