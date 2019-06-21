<template>
  <div class="container-fluid tree-knowledge">
    <h1 class="introduction">
      <img :src="require('./../../assets/images/tree/Point.png')">Click at the cards below! You could discover how tree to be managed in Hong Kong!
    </h1>

    <div class="container cards-group">
      <TreeInfoCard
        :class="[{active: item.id === activeKonwledge}]"
        :text="item.text"
        :icon="item.icon"
        :fclr="item.fClr"
        :bgClr="item.bgClr"
        v-for="(item,idx) in knowledgeOptions"
        :key="idx"
        @click="SET_ACTIVE_KNOWLEDGE(item.id)"
      ></TreeInfoCard>
    </div>

    <div class="container info-card-content" v-if="activeKonwledge != ''">
      <KnowledgeCard
        :order="idx+1"
        :caption="item.title"
        :text="item.content"
        :clr="knowledgeClr(activeKonwledge)"
        v-for="(item, idx) in $t('message.knowledgeInfo')[activeKonwledge]"
        :key="idx"
      ></KnowledgeCard>
    </div>
    <p
      class="attached-inof"
      v-if="activeKonwledge != ''"
    >We would like to acknowledge the source of info card in this website to Greening, Landscape and Tree Management Section, Development Bureau of HKSAR.</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

import TreeInfoCard from "./../../components/ourTree/TreeInfoCard";
import KnowledgeCard from "./../../components/ourTree/KnowledgeCard";

export default {
  name: "Knowledge",
  components: {
    TreeInfoCard,
    KnowledgeCard
  },
  methods: {
    ...mapMutations("tree", ["SET_ACTIVE_KNOWLEDGE"])
  },
  computed: {
    ...mapState("tree", ["activeKonwledge", "knowledgeOptions"]),
    ...mapGetters("tree", ["knowledgeClr"])
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.tree-knowledge {
  min-height: 50rem;
  background-color: #f5f5f5;
  overflow: auto;

  h1.introduction {
    margin: 0 auto;
    margin-top: 30px;
    width: 1200px;
    padding: 30px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    box-sizing: border-box;
    background-color: #fff;

    img {
      margin: 0 15px;
      height: 32px;
      transform: rotate(180deg);
    }
  }

  .cards-group {
    margin-top: 15px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-content: center;
    box-sizing: border-box;

    background-color: #fff;
  }

  .info-card-content {
    margin: 15px auto;
    /*定义列数*/
    column-count: 2;
    /*列间距*/
  }

  .attached-inof {
    margin: 15px auto;
    margin-top: 3rem;
    padding: 1.5rem;
    border-top: 1px dashed #ccc;
    border-bottom: 1px dashed #ccc;

    width: 100%;
    max-width: 1200px;

    color: #909090;
    font-size: 1.4rem;
    box-sizing: border-box;
    line-height: 2.4rem;
    text-align: left;
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .tree-knowledge {
    width: 100%;
    h1.introduction {
      width: 90%;
      font-size: 1.4rem;
      padding: 1.5rem 0;

      img {
        margin: 0 15px;
        height: 32px;
        transform: rotate(180deg);
      }
    }

    .cards-group {
      margin-top: 15px;
      margin-bottom: 30px;
      display: flex;
      justify-content: center;
      align-content: center;
      box-sizing: border-box;
      width: 90%;
      background-color: #fff;
    }

    .info-card-content {
      margin: 15px auto;
      padding: 0 1.5rem;
      width: 90%;

      /*定义列数*/
      column-count: 2;
      /*列间距*/
    }
  }
}

@media only screen and (max-width: 48em) {
  .tree-knowledge {
    width: 100%;
    h1.introduction {
      width: 90%;
      font-size: 1.2rem;
      padding: 1.5rem 0;

      img {
        margin: 0 15px;
        height: 32px;
        transform: rotate(180deg);
      }
    }

    .cards-group {
      margin-top: 15px;
      margin-bottom: 30px;
      display: block;
      box-sizing: border-box;
      width: 90%;
      overflow: auto;
      background-color: #fff;
    }

    .info-card-content {
      margin: 15px auto;
      padding: 0;
      width: 100%;

      /*定义列数*/
      column-count: 1;
      /*列间距*/
    }
  }
}
</style>
