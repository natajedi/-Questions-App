<script setup>
import {ref} from 'vue';
import BaseTable from '@/components/Table/BaseTable.vue';
import TableRow from '@/components/Table/TableRow.vue';
import TableColumn from '@/components/Table/TableColumn.vue';
import Button from '@/components/Button.vue';

const tableHeads = ['', 'Question', '','','','']
const tableSizeColumns = '26px 350px 68px 68px 68px 36px'

const questions = ref([
{
 id: 1,
 question: 'Какое свойство следует использовать для обеспечения пространства (внешнего отступа) вокруг изображения?',
 answer1: 'padding',
 answer2: 'border',
 answer3: 'margin'
},
{
  id: 2,
  question: 'Для каких цветов задают значения в цветовом пространстве RGB?',
  answer1: 'зеленый, желтый, красный',
  answer2: 'красный, зеленый, синий',
  answer3: 'серый, коричневый, фиолетовый'
},
{
  id: 3,
  question: 'Какое свойство управляет отображением пустых ячеек в таблице?',
  answer1: 'border',
  answer2: 'border-collapse',
  answer3: 'empty-cells'
}
])
</script>

<template>
    <h1 class="heading-1">CSS</h1>
    <base-table
    :head="tableHeads"
    :columnTemplates="tableSizeColumns">
    <table-row
    v-for="question in questions"
    :key="question.id"
    :columnTemplates="tableSizeColumns">
    <table-column>
      {{question.id}}
    </table-column>
    <table-column>
      {{question.question}}
    </table-column>
    <table-column>
      {{question.answer1}}
    </table-column>
    <div class="round">
<input type="checkbox" v-model="toggle" />
<label for="checkbox"></label>
</div>
    <table-column>
      {{question.answer2}}
    </table-column>
    <div class="round">
<input type="checkbox"> 
<label for="checkbox"></label>
</div> 
    <table-column>
      {{question.answer3}}
    </table-column>
    <div class="round">
<input type="checkbox"> 
<label for="checkbox"></label>
</div>
    <table-column>
      <Button label="Next"/>
    </table-column>
    </table-row>
      <Button label="Next"/>
   </base-table>
      <Button label="Next"/>
</template>