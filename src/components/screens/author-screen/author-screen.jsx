import React from 'react';
import Button from '@/components/ui/button/button';
import { AppPage, AppRoute } from '@/const';
import style from './style.module.css';
import Text from '@/components/ui/text/text';

function AuthorScreen() {
  return (
    <main className={style.screen}>
      <div className={style.author}>
        <img
          className={style.authorImage}
          src="/img/author.jpg"
          width={420}
          height={420}
          alt="Зафар Мирзо"
        />
        <q className={style.quote}>Цель высока, когда любовь обширна</q>
      </div>

      <h1 className={style.screenTitle}>Авторский сайт</h1>
      <h2 className={style.authorName}>Зафар Мирзо</h2>

      <div className={style.info}>
        <div className={style.infoItem}>
          Социальный предприниматель и председатель. Также занимаюсь философским творчеством.
        </div>

        <time className={style.infoItem}>
          1 Мая 1972
        </time>

        <div className={style.infoItem}>
          <Text>Из моего собственного философского творчества</Text>
          <div className={style.button}>
            <Button href={AppRoute.Quotes}>{AppPage.Home}</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AuthorScreen;
