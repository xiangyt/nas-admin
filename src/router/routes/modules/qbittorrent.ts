import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const qbittorrent: AppRouteModule = {
  path: '/qbittorrent',
  name: 'QBitTorrent',
  component: LAYOUT,
  redirect: '/qbittorrent/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:arrow-back-circle',
    title: t('routes.qbittorrent.qbittorrent'),
    orderNo: 12,
  },
  children: [
    {
      path: 'index',
      name: 'QBitTorrentPage',
      component: () => import('/@/views/qbittorrent/index.vue'),
      meta: {
        title: t('routes.qbittorrent.qbittorrent'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default qbittorrent;
