import React from 'react';
import style from './style.module.css';
import Title from '@/components/ui/title/title';

function TagsScreen() {
  const tags = [
    'Вечные вопросы',
    'Жизнелюбие',
    'Мировоззрение',
    'Мораль и Этика',
    'Направления мысли',
    'Наука и Просвещение',
    'Развитие личности',
    'Развитие общества',
    'Самореализация',
    'Смысл жизни',
    'Счастье',
    'Цели человека',
    'Ценности и Идеалы',
    'Ценность жизни',
    'Человечность',
    'Юмор и Ирония',
  ];

  return (
    <main className={style.main}>
      <section className={style.section}>
        <Title className={style.title}>Теги</Title>

        <ul className={style.list}>
          {tags.map((tag, key) => (
            <li key={key} className={style.listItem}>{tag}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default TagsScreen;
