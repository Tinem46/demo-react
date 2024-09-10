import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoAPP from './App.jsx'
import ReactDOM from 'react-dom/client'

// Single Page Application //chỉ có 1 trang duy nhất và react sẽ sử dụng render ra màn hình chứ không phải là nhiều trang
// Cilent side rendering //react sẽ render ra màn hình và sử dụng javascript để thực hiện các tương tác với trang web
// Server side rendering //react sẽ render ra màn hình và server sẽ gửi xuống client


ReactDOM.createRoot(document.getElementById('root')).render(<ToDoAPP />);
// Tìm 1 cái thẻ có ID là root
// Tất cả nội dung trong App sẽ được gắn vào thẻ root và render ra màn hình
