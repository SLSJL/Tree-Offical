<template>
  <div class="container-fluid tree-knowledge">
    <h2 class="introduction">
      <img :src="require('./../../assets/images/tree/Point.png')" />
      {{$t("message.tree.infocard.tips")}}
    </h2>

    <div class="container cards-group">
      <TreeInfoCard
        :class="[{active: item.id === activeKonwledge}]"
        :text="item.text"
        :icon="item.icon"
        :fclr="item.fClr"
        :bgClr="item.bgClr"
        v-for="(item,idx) in $t('message.tree.infoCards')"
        :key="idx"
        @click="SET_ACTIVE_KNOWLEDGE(item.id)"
      ></TreeInfoCard>
    </div>

    <div class="container info-card-content" v-if="activeKonwledge != ''">
      <KnowledgeCard
        :order="idx+1"
        :caption="item.title"
        :text="item.content"
        :clr="knowledgeClr"
        v-for="(item, idx) in $t('message.tree.knowledgeInfo')[activeKonwledge]"
        :key="idx"
      ></KnowledgeCard>
    </div>
    <p class="attached-inof">{{$t('message.tree.acknowledgement')}}</p>
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
    ...mapGetters("tree", ["knowledgeClr"]),
    knowledgeClr: function() {
      let knowledges = this.$t("message.tree.infoCards");
      let selectedCard = knowledges.find(el => {
        return el.id === this.activeKonwledge;
      });
      return selectedCard.fClr;
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.tree-knowledge {
  min-height: 50rem;
  background-color: #eee;
  overflow: auto;

  h2.introduction {
    margin: 0 auto;
    margin-top: 30px;
    // border-top: 4px solid #00a091;
    // border-bottom: 4px solid #00a091;

    width: 1200px;
    padding: 15px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    box-sizing: border-box;
    background-color: #fff;

    img {
      margin: 0 15px;
      height: 24px;
      transform: rotate(180deg);
    }
  }

  .cards-group {
    display: flex;
    justify-content: center;
    align-content: center;

    margin-top: 30px;
    margin-bottom: 30px;

    box-sizing: border-box;
    background-color: #fff;
  }

  .info-card-content {
    margin: 15px auto;
    display: inline-grid;
    box-sizing: border-box;
    grid-template-columns: 50% 50%;
    grid-row-gap: 15px;
    grid-column-gap: 7px;
    /*列间距*/
  }

  .attached-inof {
    margin: 15px auto;
    margin-top: 3rem;
    padding: 1.5rem;

    width: 100%;
    max-width: 1200px;

    color: #606060;
    font-size: 1.3em;
    box-sizing: border-box;
    line-height: 2.4rem;
    text-align: center;
    font-weight: bolder;
    background-color: #fff;
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .tree-knowledge {
    width: 100%;
    h2.introduction {
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
      width: 90%;
    }
  }
}

@media only screen and (max-width: 48em) {
  .tree-knowledge {
    width: 100%;
    h2.introduction {
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
      display: block;
      /*列间距*/
    }
  }
}
</style>
