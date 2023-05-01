import React from 'react';

function CommentIcon(props) {
  return (
    <svg width={20} height={20} {...props} fill="none">
      <path d="M5.51 17.802a9 9 0 1 0-3.312-3.312l.003.005c.073.127.11.191.127.252.016.057.02.108.016.168-.004.063-.025.129-.07.26l-.768 2.307-.001.003c-.162.487-.243.73-.186.892.05.142.163.253.304.304.162.057.404-.023.889-.185l.006-.002 2.306-.769c.131-.044.198-.066.262-.07.059-.004.11.001.167.017.06.017.125.054.253.127l.004.003Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default CommentIcon;
