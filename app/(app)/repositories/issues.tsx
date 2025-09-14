import { Colors } from '@/constants/theme';
import { StyleSheet, View, FlatList } from 'react-native';

import { CardIssue, Text } from '@/components';

type LabelsProps = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: null;
};

export type ItemProps = {
  title: string;
  labels: LabelsProps[];
  username: string;
};

export default function IssuesScreen() {
  const DATA = [
    {
      url: 'https://api.github.com/repos/monero-project/monero/issues/10081',
      repository_url: 'https://api.github.com/repos/monero-project/monero',
      labels_url:
        'https://api.github.com/repos/monero-project/monero/issues/10081/labels{/name}',
      comments_url:
        'https://api.github.com/repos/monero-project/monero/issues/10081/comments',
      events_url:
        'https://api.github.com/repos/monero-project/monero/issues/10081/events',
      html_url: 'https://github.com/monero-project/monero/pull/10081',
      id: 3413863332,
      node_id: 'PR_kwDOASa_i86obKRe',
      number: 10081,
      title: 'wallet: re-add detatched confirmed transactions on reorg',
      user: {
        login: 'jeffro256',
        id: 10839482,
        node_id: 'MDQ6VXNlcjEwODM5NDgy',
        avatar_url: 'https://avatars.githubusercontent.com/u/10839482?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/jeffro256',
        html_url: 'https://github.com/jeffro256',
        followers_url: 'https://api.github.com/users/jeffro256/followers',
        following_url:
          'https://api.github.com/users/jeffro256/following{/other_user}',
        gists_url: 'https://api.github.com/users/jeffro256/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/jeffro256/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/jeffro256/subscriptions',
        organizations_url: 'https://api.github.com/users/jeffro256/orgs',
        repos_url: 'https://api.github.com/users/jeffro256/repos',
        events_url: 'https://api.github.com/users/jeffro256/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/jeffro256/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      labels: [
        {
          id: 346541963,
          node_id: 'MDU6TGFiZWwzNDY1NDE5NjM=',
          url: 'https://api.github.com/repos/monero-project/monero/labels/pending%20review',
          name: 'pending review',
          color: 'fbca04',
          default: false,
          description: null,
        },
        {
          id: 6305215258,
          node_id: 'LA_kwDOASa_i88AAAABd9HzGg',
          url: 'https://api.github.com/repos/monero-project/monero/labels/wallet',
          name: 'wallet',
          color: '95B202',
          default: false,
          description: '',
        },
        {
          id: 346541963,
          node_id: 'MDU6TGFiZWwzNDY1NDE5NjM=',
          url: 'https://api.github.com/repos/monero-project/monero/labels/pending%20review',
          name: 'pending review',
          color: 'fbca04',
          default: false,
          description: null,
        },
        {
          id: 6305215258,
          node_id: 'LA_kwDOASa_i88AAAABd9HzGg',
          url: 'https://api.github.com/repos/monero-project/monero/labels/wallet',
          name: 'wallet',
          color: '95B202',
          default: false,
          description: '',
        },
      ],
      state: 'open',
      locked: false,
      assignee: null,
      assignees: [],
      milestone: null,
      comments: 0,
      created_at: '2025-09-13T17:15:49Z',
      updated_at: '2025-09-13T17:58:55Z',
      closed_at: null,
      author_association: 'CONTRIBUTOR',
      type: null,
      active_lock_reason: null,
      draft: true,
      pull_request: {
        url: 'https://api.github.com/repos/monero-project/monero/pulls/10081',
        html_url: 'https://github.com/monero-project/monero/pull/10081',
        diff_url: 'https://github.com/monero-project/monero/pull/10081.diff',
        patch_url: 'https://github.com/monero-project/monero/pull/10081.patch',
        merged_at: null,
      },
      body: 'Resolves #10067 (NOT TESTED)',
      closed_by: null,
      reactions: {
        url: 'https://api.github.com/repos/monero-project/monero/issues/10081/reactions',
        total_count: 0,
        '+1': 0,
        '-1': 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        'https://api.github.com/repos/monero-project/monero/issues/10081/timeline',
      performed_via_github_app: null,
      state_reason: null,
    },
  ];

  const Item = ({ title, labels, username }: ItemProps) => (
    <View>
      <CardIssue title={title} username={username} labels={labels} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            labels={item.labels}
            username={item.user.login}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
});
