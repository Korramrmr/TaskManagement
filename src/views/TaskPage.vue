<template>
    <div class="task-page">
        <div class="task-list">
            <TaskItem v-for="task in tasks" :key="task.taskID" :titleTask="task.title" :createInfo="task.createInfo"
                :taskID="task.taskID" :statusInfo="task.statusInfo" :changeInfo="task.changeInfo"
                @task-created="handleTaskCreated" />
        </div>
        <PlugPage :placeholderText="placeholderText" />
    </div>
</template>
  
<script>
import TaskItem from '@/components/TaskItem/TaskItem.vue';
import Navigation from '@/components/Navigation/Navigation.vue';
import PlugPage from '@/components/PlugPage/PlugPage.vue';

export default {
    name: 'TaskPage',
    components: {
        TaskItem,
        Navigation,
        PlugPage,
    },
    data() {
        return {
            tasks: [
                {
                    taskID: 1,
                    title: 'Очень длинное название проекта, создано специально для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. Очень длинное название проекта, создано специально для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специально чтоб проверить не сломается ли верстка..',
                    createInfo: 'Иванов И.И. создал 1 час назад',
                    statusInfo: 'Черновик',
                    changeInfo: 'Баранов В.В. изменил 1 минуту назад'
                },
                {
                    taskID: 2,
                    title: 'Задача 2',
                    createInfo: 'Петров П.П. создал 2 часа назад',
                    statusInfo: 'Удалена',
                    changeInfo: 'Сидоров А.А. изменил 5 минут назад'
                },
                {
                    taskID: 3,
                    title: 'Задача 3',
                    createInfo: 'Смирнов К.К. создал 3 часа назад',
                    statusInfo: 'Выполнена',
                    changeInfo: 'Иванов И.И. изменил 10 минут назад'
                },
                {
                    taskID: 4,
                    title: 'Задача 4',
                    createInfo: 'Смирнов К.К. создал 3 часа назад',
                    statusInfo: 'Не активен',
                    changeInfo: 'Иванов И.И. изменил 10 минут назад'
                },
                {
                    taskID: 5,
                    title: 'Задача 4',
                    createInfo: 'Смирнов К.К. создал 3 часа назад',
                    statusInfo: 'Тестирование',
                    changeInfo: 'Иванов И.И. изменил 10 минут назад'
                },
            ], placeholderText: "Не создана ни одна задача"
        };
    }, methods: {
        handleTaskCreated(task) {
            console.log('Создана новая задача:', task);
        }
    }
};
</script>
  