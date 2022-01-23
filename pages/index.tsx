import type { NextPage } from 'next';

import Schedule from '../src/components/Schedule';
import styles from '../styles/Home.module.css';
import Header from '../src/components/Header';

const structure = {
  header: { title: 'Tumbleturn' },
  session: [
    {
      title: 'Warm Up',
      panels: [
        {
          panelType: 'warm-up',
          totalDistance: 300,
          totalTime: 480,
          difficulty: 10,
          breakdown: [
            { description: '200m - front crawl' },
            { description: '100m - breaststroke' },
            { description: '100m - backstroke' },
          ],
        },
      ],
      backgroundColor: 'green',
    },
    {
      title: 'Drills',
      panels: [
        {
          panelType: 'front-crawl-drills',
          totalDistance: 600,
          totalTime: 720,
          difficulty: 8,
          breakdown: [
            { description: '100m - 1 arm front crawl', time: 'on 2 mins' },
            { description: '100m - breath every three' },
            { description: '100m - long strokes' },
            { description: '100m - travoltas' },
            { description: '100m - drag fingers across water' },
            { description: '100m - doggy paddle' },
          ],
        },
      ],
      backgroundColor: 'blue',
    },
    {
      title: 'Main Set',
      panels: [
        {
          panelType: 'front-crawl-main-set-distance',
          totalDistance: 900,
          totalTime: 875,
          difficulty: 4,
          breakdown: [
            {
              description: '100m - front crawl',
              intensity: '-',
              time: '1min 40s',
            },
            {
              description: '200m - front crawl',
              intensity: '-',
              time: '3min 15s',
            },
            {
              description: '300m - front crawl',
              intensity: '-',
              time: '5min 10s',
            },
            { description: '200m - front crawl', intensity: '-', time: '3min' },
            {
              description: '100m - front crawl',
              intensity: '-',
              time: '1min 30s',
            },
          ],
        },
      ],
      backgroundColor: 'orange',
    },
    {
      title: 'Main Set',
      panelType: 'front-crawl-sub-set-distance',
      difficulty: 4,
      panels: [
        {
          panelType: 'front-crawl-main-set',
          totalDistance: 200,
          totalTime: 230,
          breakdown: [
            {
              description: '50m - front crawl',
              intensity: '70%',
              time: '1min 5s',
            },
            {
              description: '50m - front crawl',
              intensity: '80%',
              time: '1min',
            },
            {
              description: '50m - front crawl',
              intensity: '90%',
              time: '55s',
            },
            {
              description: '50m - front crawl',
              intensity: '100%',
              time: '50s',
            },
          ],
        },
      ],
      backgroundColor: 'red',
    },
    {
      title: 'Warm Down',
      panels: [
        {
          panelType: 'warm-down',
          totalDistance: 200,
          totalTime: 240,
          difficulty: 10,
          breakdown: [
            { description: '200m - front crawl' },
          ],
        },
      ],
      backgroundColor: 'green',
    },
  ],
};

const Home: NextPage = () => {
  const { header, session } = structure || {};
  return (
    <div className={styles.container}>
      <Header title={header.title} />
      <Schedule session={session} />
    </div>
  );
};

export default Home;
