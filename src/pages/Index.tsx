import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Index = () => {
  const [activeSection, setActiveSection] = useState('проекты')

  const courses = [
    {
      id: 1,
      title: 'Lego WeDo 2.0',
      age: '6-8 лет',
      description: 'Первые шаги в мир робототехники с программируемыми моторами и датчиками',
      image: '/img/e074032a-ed93-4d33-bb72-365d9a112970.jpg',
      duration: '8 занятий',
      level: 'Начинающий',
      kit: 'WeDo 2.0'
    },
    {
      id: 2,
      title: 'Lego Mindstorms EV3',
      age: '9-12 лет',
      description: 'Создание сложных роботов с использованием продвинутых датчиков и программирования',
      image: '/img/510b9646-572f-4ab8-a60a-93882093513f.jpg',
      duration: '12 занятий',
      level: 'Средний',
      kit: 'EV3'
    },
    {
      id: 3,
      title: 'Продвинутая робототехника',
      age: '12+ лет',
      description: 'Изучение сложного программирования и создание автономных роботов',
      image: '/img/e074032a-ed93-4d33-bb72-365d9a112970.jpg',
      duration: '16 занятий',
      level: 'Продвинутый',
      kit: 'EV3 Pro'
    }
  ]

  const projects = [
    {
      title: 'Робот-исследователь',
      description: 'Автономный робот на базе EV3 для изучения окружающей среды',
      students: ['Анна К.', 'Максим П.', 'София В.'],
      kit: 'EV3'
    },
    {
      title: 'Умная ферма',
      description: 'Система автоматизации с WeDo 2.0 для ухода за растениями',
      students: ['Артем М.', 'Полина Л.'],
      kit: 'WeDo 2.0'
    },
    {
      title: 'Робот-сортировщик',
      description: 'Интеллектуальный робот для сортировки предметов по цвету',
      students: ['Даниил Н.', 'Ева С.', 'Тимур К.'],
      kit: 'EV3'
    }
  ]

  const videoLessons = [
    {
      title: 'Первые шаги с WeDo 2.0',
      duration: '15 мин',
      level: 'Новичок',
      kit: 'WeDo 2.0'
    },
    {
      title: 'Программирование движения EV3',
      duration: '22 мин',
      level: 'Базовый',
      kit: 'EV3'
    },
    {
      title: 'Работа с датчиками касания',
      duration: '18 мин',
      level: 'Средний',
      kit: 'EV3'
    }
  ]

  const competitions = [
    {
      name: 'Робобитва EV3',
      date: '15 декабря',
      status: 'Скоро',
      category: 'Соревнования'
    },
    {
      name: 'WeDo Творческий конкурс',
      date: '28 января',
      status: 'Регистрация',
      category: 'Выставка'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-robotek-purple/10 via-robotek-yellow/10 to-robotek-red/10 font-nunito">
      {/* Навигация */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-robotek-purple/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/8eaea200-3c85-431b-8c9f-538e7943bcd8.jpg"
                alt="Логотип Роботек"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-fredoka text-robotek-red">РОБОТЕК</h1>
                <p className="text-xs text-gray-600 uppercase tracking-wide">Клуб робототехники</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              {['Главная', 'Курсы', 'Проекты', 'Видеоуроки', 'Соревнования', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-robotek-purple ${
                    activeSection === item.toLowerCase() ? 'text-robotek-purple' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            
            <Button className="bg-gradient-to-r from-robotek-purple to-robotek-red text-white hover:shadow-lg transition-all duration-300">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Основной контент */}
      <main>
        {/* Героблок */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="animate-bounce-gentle mb-8">
              <img 
                src="https://cdn.poehali.dev/files/8eaea200-3c85-431b-8c9f-538e7943bcd8.jpg" 
                alt="Логотип Роботек" 
                className="w-48 h-48 mx-auto object-contain"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-fredoka text-robotek-red mb-6 animate-fade-in">
              РОБОТЕК
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in">
              Клуб робототехники для детей от 6 до 16 лет. 
              Изучаем программирование с Lego WeDo 2.0 и Mindstorms EV3!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <Button size="lg" className="bg-gradient-to-r from-robotek-purple to-robotek-red text-white hover:scale-105 transition-transform">
                <Icon name="Play" className="mr-2" />
                Попробовать бесплатно
              </Button>
              <Button variant="outline" size="lg" className="border-robotek-yellow text-robotek-purple hover:bg-robotek-yellow hover:text-robotek-purple">
                <Icon name="Calendar" className="mr-2" />
                Расписание
              </Button>
            </div>

            {/* Особенности клуба */}
            <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-robotek-purple to-robotek-yellow rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Blocks" className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-robotek-purple mb-2">Lego WeDo 2.0</h3>
                  <p className="text-gray-600 text-sm">Программируемые моторы и датчики для младших школьников</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-robotek-red to-robotek-purple rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Cpu" className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-robotek-red mb-2">Mindstorms EV3</h3>
                  <p className="text-gray-600 text-sm">Продвинутая робототехника с интеллектуальным блоком EV3</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-robotek-yellow to-robotek-red rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Trophy" className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-robotek-yellow mb-2">Соревнования</h3>
                  <p className="text-gray-600 text-sm">Участие в робототехнических олимпиадах и конкурсах</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Курсы */}
        <section className="py-16 px-4 bg-white/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-fredoka text-center text-robotek-purple mb-12">
              Наши курсы
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-robotek-purple to-robotek-red text-white">
                      {course.level}
                    </Badge>
                    <Badge className="absolute top-4 left-4 bg-robotek-yellow text-robotek-purple">
                      {course.kit}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-robotek-purple border-robotek-purple">
                        {course.age}
                      </Badge>
                      <Badge variant="outline" className="text-robotek-red border-robotek-red">
                        {course.duration}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <Button className="w-full bg-gradient-to-r from-robotek-yellow to-robotek-red text-white hover:shadow-lg">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Интерактивные разделы */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
                <TabsTrigger value="проекты" className="text-sm">Проекты</TabsTrigger>
                <TabsTrigger value="видеоуроки" className="text-sm">Видеоуроки</TabsTrigger>
                <TabsTrigger value="соревнования" className="text-sm">Соревнования</TabsTrigger>
                <TabsTrigger value="конструктор" className="text-sm">Наборы</TabsTrigger>
              </TabsList>

              <TabsContent value="проекты" className="animate-fade-in">
                <h2 className="text-3xl font-fredoka text-center text-robotek-purple mb-8">
                  Проекты учеников
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                          <Badge className={project.kit === 'EV3' ? 'bg-robotek-red' : 'bg-robotek-yellow text-robotek-purple'}>
                            {project.kit}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.students.map((student, i) => (
                            <Badge key={i} variant="outline" className="text-robotek-purple border-robotek-purple">
                              {student}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="видеоуроки" className="animate-fade-in">
                <h2 className="text-3xl font-fredoka text-center text-robotek-purple mb-8">
                  Видеоуроки
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {videoLessons.map((lesson, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-gradient-to-r from-robotek-purple to-robotek-red text-white">
                            {lesson.level}
                          </Badge>
                          <div className="flex items-center gap-2">
                            <Badge className={lesson.kit === 'EV3' ? 'bg-robotek-red' : 'bg-robotek-yellow text-robotek-purple'}>
                              {lesson.kit}
                            </Badge>
                            <span className="text-sm text-gray-500">{lesson.duration}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">{lesson.title}</h3>
                        <Button className="w-full bg-gradient-to-r from-robotek-yellow to-robotek-red text-white">
                          <Icon name="Play" className="mr-2" />
                          Смотреть
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="соревнования" className="animate-fade-in">
                <h2 className="text-3xl font-fredoka text-center text-robotek-purple mb-8">
                  Соревнования
                </h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {competitions.map((comp, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-gray-800">{comp.name}</h3>
                          <Badge className={comp.status === 'Скоро' ? 'bg-robotek-red' : 'bg-robotek-purple'}>
                            {comp.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-gray-600">{comp.date}</p>
                          <Badge variant="outline" className="text-robotek-yellow border-robotek-yellow">
                            {comp.category}
                          </Badge>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-robotek-purple to-robotek-red text-white">
                          Участвовать
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="конструктор" className="animate-fade-in">
                <h2 className="text-3xl font-fredoka text-center text-robotek-purple mb-8">
                  Наши наборы
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <div className="text-6xl mb-4">🧱</div>
                        <h3 className="text-2xl font-bold text-robotek-yellow mb-2">Lego WeDo 2.0</h3>
                        <p className="text-gray-600 mb-4">
                          Идеальный набор для знакомства с робототехникой. Простое программирование и увлекательные проекты.
                        </p>
                        <div className="flex justify-center gap-2 mb-4">
                          <Badge className="bg-robotek-yellow text-robotek-purple">6-8 лет</Badge>
                          <Badge variant="outline" className="text-robotek-yellow border-robotek-yellow">Bluetooth</Badge>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-robotek-yellow to-robotek-red text-white hover:scale-105 transition-transform">
                        Узнать больше
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <div className="text-6xl mb-4">🤖</div>
                        <h3 className="text-2xl font-bold text-robotek-red mb-2">Mindstorms EV3</h3>
                        <p className="text-gray-600 mb-4">
                          Профессиональная платформа для создания сложных роботов с продвинутыми возможностями программирования.
                        </p>
                        <div className="flex justify-center gap-2 mb-4">
                          <Badge className="bg-robotek-red text-white">9+ лет</Badge>
                          <Badge variant="outline" className="text-robotek-red border-robotek-red">Продвинутый</Badge>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-robotek-purple to-robotek-red text-white hover:scale-105 transition-transform">
                        Узнать больше
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Контакты */}
        <section className="py-16 px-4 bg-gradient-to-r from-robotek-purple/10 to-robotek-yellow/10">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-fredoka text-robotek-purple mb-8">
              Свяжитесь с нами
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" className="mx-auto mb-4 text-robotek-purple" size={32} />
                  <h3 className="font-bold text-gray-800 mb-2">Адрес</h3>
                  <p className="text-gray-600">ул. Инновационная, 42<br />Москва, 123456</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Icon name="Phone" className="mx-auto mb-4 text-robotek-red" size={32} />
                  <h3 className="font-bold text-gray-800 mb-2">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67<br />+7 (925) 987-65-43</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Icon name="Mail" className="mx-auto mb-4 text-robotek-yellow" size={32} />
                  <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">info@robotek.ru<br />courses@robotek.ru</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12">
              <Button size="lg" className="bg-gradient-to-r from-robotek-purple to-robotek-red text-white hover:scale-105 transition-transform">
                <Icon name="MessageSquare" className="mr-2" />
                Написать нам
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/8eaea200-3c85-431b-8c9f-538e7943bcd8.jpg"
              alt="Логотип Роботек"
              className="w-10 h-10 object-contain bg-white rounded-lg p-1"
            />
            <div>
              <h3 className="text-xl font-fredoka text-robotek-red">РОБОТЕК</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wide">Клуб робототехники</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            Клуб робототехники для детей • Lego WeDo 2.0 • Mindstorms EV3
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-robotek-yellow">
              <Icon name="Instagram" className="mr-2" />
              Instagram
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-robotek-red">
              <Icon name="Youtube" className="mr-2" />
              YouTube
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-robotek-purple">
              <Icon name="Phone" className="mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index