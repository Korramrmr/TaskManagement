<template>
    <div class="project-list">
        <ProjectItem v-for="project in projects" :key="project.projectID" :titleProject="project.title"
            :projectID="project.projectID" :createInfo="project.createInfo" :editorInfo="project.editorInfo" />
            <PlugPage :placeholderText="placeholderText" />    
            </div>
</template>

  
<script>
import ProjectItem from '@/components/ProjectItem/ProjectItem.vue';
import Navigation from '@/components/Navigation/Navigation.vue';
import PlugPage from '@/components/PlugPage/PlugPage.vue';


export default {
    name: 'ProjectsPage',
    components: {
        ProjectItem,
        Navigation,
        PlugPage,
    },
    data() {
        return {
            projects: [
                {
                    projectID: 1,
                    title: 'Проект 1',
                    createInfo: 'Иванов И.И. создал 1 час назад',
                    editorInfo: 'Баранов В.В. изменил 1 минуту назад'
                },
                {
                    projectID: 2,
                    title: 'Проект 2',
                    createInfo: 'Петров П.П. создал 2 часа назад',
                    editorInfo: 'Сидоров А.А. изменил 5 минут назад'
                },
                {
                    projectID: 3,
                    title: 'Проект 2',
                    createInfo: 'Петров П.П. создал 2 часа назад',
                    editorInfo: 'Сидоров А.А. изменил 5 минут назад'
                },
                {
                    projectID: 4,
                    title: 'Проект 2',
                    createInfo: 'Иванов П.П. создал 2 часа назад',
                    editorInfo: 'Петров А.А. изменил 5 минут назад'
                },

                {
                    projectID: 5,
                    title: 'Проект 5',
                    createInfo: 'Смирнов К.К. создал 3 часа назад',
                    editorInfo: 'Иванов И.И. изменил 10 минут назад'
                }
            ],       placeholderText: "Не создан ни один проект"
        };
    },
};
</script>
  

  