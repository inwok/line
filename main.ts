Python 3.11.3 (v3.11.3:f3909b8bc8, Apr  4 2023, 20:12:10) [Clang 13.0.0 (clang-1300.0.29.30)] on darwin
Type "help", "copyright", "credits" or "license()" for more information.
>>> /**
...  * Functions are mapped to blocks using various macros
...  * in comments starting with %. The most important macro
...  * is "block", and it specifies that a block should be
...  * generated for an **exported** function.
...  */
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
... // เรียกใช้งานฟังก์ชันส่งข้อความ


