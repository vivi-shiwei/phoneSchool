import React from 'react'
import { useRouter } from 'next/router'
import {
  SingleAnnouncement,
  Box,
  StatusButton,
  Header,
  HeaderLogo,
  Heading,
  HeaderCenter,
  Text,
  HeaderRight,
  Avatar,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from 'viviui'


import App from '../App'

const PhoneNotifications = () => {
  const router = useRouter()
  return (
    <App bg='#E6FFFA'>
      <Header bg='#4bd6f3'>
        <HeaderLogo>
          <Heading as='h1' fontSize='26px' letterSpacing='-.1rem'>
            <Box as='span' d={{ base: 'none', sm: 'inline' }}>
              SCHOOL
            </Box>
            <Box as='span' d={{ base: 'inline', sm: 'none' }}>
              SCH
            </Box>
          </Heading>
        </HeaderLogo>
        <HeaderCenter>
          <Text fontSize='19px' fontWeight='bold'>通告</Text>
        </HeaderCenter>
        <HeaderRight>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </HeaderRight>
      </Header>
      <Box mt={16}>
        <Tabs variant='unstyled'>
          <TabList d='flex' justifyContent='space-between'>
            <Tab w='100%' border='1px solid #A0AEC0' borderWidth='0 1px 1px 0' _selected={{ bg: '#E2E8F0' }}>全部</Tab>
            <Tab w='100%' border='1px solid #A0AEC0' borderWidth='0 0 1px 0' _selected={{ bg: '#E2E8F0' }}>未读</Tab>
            <Tab w='100%' border='1px solid #A0AEC0' borderWidth='0 0 1px 1px' _selected={{ bg: '#E2E8F0' }}>未回复</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SingleAnnouncement
                title='圣诞节活动'
                time='2019-08-09 14:09'
                content='发布人：vivi(管理员)'
                onClick={() => {
                  router.push('/tify')
                }}
              >
                <StatusButton>未读</StatusButton>
              </SingleAnnouncement>

              <SingleAnnouncement
                title='圣诞节活动'
                time='2019-08-09 14:09'
                content='发布人：vivi(管理员)'
              >
                <StatusButton>未回复</StatusButton>
              </SingleAnnouncement>

              <SingleAnnouncement
                title='圣诞节活动'
                time='2019-08-09 14:09'
                content='发布人：vivi(管理员)'
              >
                <StatusButton background='#4299E1'>已读</StatusButton>
              </SingleAnnouncement>
            </TabPanel>
            <TabPanel>
              <SingleAnnouncement
                title='圣诞节活动'
                time='2019-08-09 14:09'
                content='发布人：vivi(管理员)'
              >
                <StatusButton>未读</StatusButton>
              </SingleAnnouncement>
            </TabPanel>
            <TabPanel>
              <SingleAnnouncement
                title='圣诞节活动'
                time='2019-08-09 14:09'
                content='发布人：vivi(管理员)'
              >
                <StatusButton>未回复</StatusButton>
              </SingleAnnouncement>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </App>
  )
}

export default PhoneNotifications
