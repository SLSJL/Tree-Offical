<template>
  <div class="database-map-wrap">
    <div class="container-fluid" id="database-map"></div>

    <!-- <div class="datamap-map-layers">
      <div class="layer-switch-gp">
        <ul>
          <li class="bg-layer_tree"></li>
          <li class="bg-layer_sensor"></li>
          <li class="bg-layer_building"></li>
          <li class="bg-layer_traffic"></li>
          <li class="bg-layer_weather"></li>
        </ul>

        <el-button
          type="text"
          :class="['layer-control_swich', {on:showLayers}]"
          @click="showLayers = !showLayers"
        >
          <i class="el-icon-caret-bottom"></i>
        </el-button>
      </div> -->

      <!-- <div class="layer-tree" v-if="showLayers">
        <el-tree
          :data="mapTreeCfg"
          :node-key="'key'"
          show-checkbox
          :default-checked-keys="defaultChecks"
          @check-change="checkStatus"
        ></el-tree>
      </div> -->
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  name: "OurTreeMap",
  data() {
    return {
      map: null,
      showLayers: false,
      attrField: [
        "TreeId",
        "Tree_ID",
        "Species",
        "DBH",
        "Spread",
        "EngLocation",
        "Eng_Location",
        "Height"
      ],
      defaultChecks: null,
      mapTreeCfg: [
        {
          key: "t_001",
          label: "Tree",
          children: [
            {
              key: "t_001_001",
              label: "Tai Tang",
              lyrUrl:
                "http://47.91.133.30:6080/arcgis/rest/services/Tree/Tree/MapServer/2",
              lyr: null
            },
            {
              key: "t_001_002",
              label: "Wan Chai",
              lyrUrl:
                "http://47.91.133.30:6080/arcgis/rest/services/Tree/Tree/MapServer/1",
              lyr: null
            },
            {
              key: "t_001_003",
              label: "Kowloon Bay",
              lyrUrl:
                "http://47.91.133.30:6080/arcgis/rest/services/Tree/Tree/MapServer/0",
              lyr: null
            }
          ]
        }
      ]
    };
  },
  async mounted() {
    this.map = this.$utils.map.init("database-map", {
      minZoom: 7,
      maxZoom: 19,
      zoomControl: false,
      attributionControl: false
    });
    this.map.setView([22.305166, 114.174862], 12);
    this.$utils.map.addEsriBasemap("Streets");

    this.mapTreeCfg[0].children.map(async elem => {
      elem.lyr = await this.$utils.map.addEsriFeatuerLayer(
        {
          url: elem.lyrUrl,
          opacity: 1,
          useCors: false
        },
        this.treePopupHTML
      );
    });
    this.defaultChecks = this.$utils.tool.getTreeCheckedKeys(
      this.mapTreeCfg[0].children
    );
  },
  methods: {
    treePopupHTML(evt) {
      let html = "";
      let treeAttr = evt.feature.properties;
      this.activeTreeAttrs = treeAttr;

      for (let key in treeAttr) {
        if (this.attrField.indexOf(key) > -1)
          html += `<p class="map-attr-line">
          <span class="map-attr-field">${key} </span>
          <span class="map-attr-value">${treeAttr[key]}</span></p>`;
      }
      return html;
    },
    async checkStatus(node, nodeCheck) {
      if (nodeCheck) {
        let treeLayer = await this.$utils.map.addEsriFeatuerLayer(
          {
            url: node.lyrUrl,
            opacity: 1,
            useCors: false
          },
          this.treePopupHTML
        );
        this.$set(node, "lyr", treeLayer);
      } else {
        if (node.lyr) node.lyr.remove();
      }
    }
  }
};
</script>
<style lang="less" scoped>
.database-map-wrap {
  position: relative;
  width: 100%;
  height: 100%;

  #database-map {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
  }

  .datamap-map-layers {
    position: absolute;
    top: 15px;
    right: 15px;

    width: 280px;

    z-index: 999;

    .layer-switch-gp {
      width: 100%;
      height: 40px;

      display: flex;
      justify-content: space-between;
      align-self: center;
      background-color: #fff;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.15);

      ul {
        display: flex;
        justify-content: center;
        align-self: center;
        padding: 0 5px;
        li {
          margin: 0 8px;
          display: inline-block;
        }
      }

      .layer-control_swich {
        margin-right: 15px;
        transition: all 0.6s;
      }
      .layer-control_swich.on {
        transform: rotate(-180deg);
      }
    }

    .layer-tree {
      padding: 15px;
      box-sizing: border-box;
      margin-top: 5px;

      width: 100%;
      background-color: #fff;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.15);
    }
  }
}

@media only screen and (max-width: 48em) {
  .datamap-map-layers {
    display: none;
  }
}
</style>
