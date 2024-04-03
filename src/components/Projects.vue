<template>
    <div v-show="active === Panel.PROJECTS" class="craft-container">
        <Tabs></Tabs>
        <div class="craft-windowbox">
            <div class="projects-box">
                <span class="projects-title">Projects</span>
                <div class="projects">
                    <span class="projects-line">Clear out nearby junk.</span>
                </div>
            </div>
            
            <div class="items-box">
                <div class="item-display">
                    <span class="item-title">Clear out nearby junk</span>
                    <span class="item-flavor">The nearby area is littered with broken machinery and sharp metal. Clearing it out would give you enough space to work on bigger projects.</span>
                    <div class="ingredients-box">
                        <span class="ingredients">Ingredients needed: <br>- makeshift shovel<br>- 2 fabric strips</span>
                        <button>Work on project.</button>
                    </div>    
                </div>
            </div>
            
        </div>
    </div>
    
    </template>
    
<script setup lang="ts">
    import Tabs from '@/components/Tabs.vue';
    import { Panel } from '@/enums';
    
    const props = defineProps({
        active: String
    })
</script>
    
<style scoped>
.projects-title {
    font-size: 26px;
}

.craft-container {
    height:100%;
    background-color: rgb(15, 15, 15);
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
}

.craft-windowbox {
    display: flex;
    height: 100%;
    width: 100%;
    margin-bottom: 20px;
}

.items-box {
    display:flex;
    flex-direction: column;   
}

.projects {
    height: 80%;
    min-width: 350px;
    max-width: 400px;
    background-color: grey;
    border: 3px solid rgb(170, 170, 170);
    border-radius: 2px;
    
    display:flex;
    flex-direction: column;
    flex-grow: 1;

    .projects-line {
        font-size:22px;
        border-bottom: 2px solid rgb(170, 170, 170);
        padding: 0 4px;
    }
}

.recipe-box {
    display:flex;
    flex-direction:column;
}

.items-box {
    display:flex;
    flex-direction: column;   
}

.item-display {
    /* padding: 8px 10px; */
    min-width: 200px;
    border: 3px solid rgb(170, 170, 170);
    background-color: rgb(34, 9, 9);
    flex-grow: 1;
    border-radius: 2px;
    display:flex;
    flex-direction: column;
    font-family: 'Squarebit2x';
    span {
        padding: 6px 10px;
    }
    .item-title {
        font-size: 24px;
        border-bottom: 2px solid white;
    }
    .item-flavor {
        font-size: 18px;
        flex-grow: 1;
    }
    .ingredients-box {
        border-top: 2px solid white;
        display:flex;
        align-items: center;
        justify-content:space-between;
        .ingredients {
            
            font-size: 18px;
        }
    }
    
}
</style>