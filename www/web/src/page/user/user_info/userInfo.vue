<template>
<div class="h-user">
   <div class="h-user-wrap">
   		<div class="h-user-head"></div>
   		<div class="h-user-content">
   			<div class="h-user-self">
   				<p class="h-user-self-name">pillow</p>
   				<p class="h-user-self-bio">笨是一种天赋</p>
   			</div>
   			<div class="h-user-data">
   				<ul class="h-user-data-wrap">
   					<li class="h-user-data-item">
   						<p class="h-user-data-num">1</p>
   						<p class="h-user-data-type">关注</p>
   					</li>
   					<li class="h-user-data-item">
   						<p class="h-user-data-num">100</p>
   						<p class="h-user-data-type">粉丝</p>
   					</li>
   					<li class="h-user-data-item">
   						<p class="h-user-data-num">100</p>
   						<p class="h-user-data-type">提问</p>
   					</li>
   				</ul>
   			</div>
   			<div class="h-user-oper">
                <div class="h-user-follow">加关注</div>      
            </div>
   		</div>
   </div> 
</div>
</template>

<script>
export default {

    name: 'UserInfo',

    data () {
        return {

        };
    }
};
</script>

<style lang="less">
.h-user {
    .h-user-wrap {
        padding: 20px 0;
        display: flex;
        .h-user-head {
            margin-left: 30px;
            width: 168px;
            height: 168px;
            border-radius: 6px;
        }
        .h-user-content {
            margin-left: 20px;
            .h-user-self {
                display: flex;
                align-items: baseline;
                margin-bottom: 30px;
                .h-user-self-name {
                    font-size: 30px;
                }
                .h-user-self-bio {
                    margin-left: 20px;
                    font-size: 18px;
                    color: #999;
                }

            }
            .h-user-data {
                margin-bottom: 30px;
                ul {
                    display: flex;
                }
                li {
                    text-align: center;
                    margin-right: 30px;
                    .h-user-data-num {
                        font-size: 22px;
                        color: #333;
                    }
                    .h-user-data-type {
                        font-size: 18px;
                        color: #999;
                    }
                }
            }
            .h-user-oper {
                .h-user-follow {
                    color: #fff;
                    background: #1d78c1;
                    border-radius: 4px;
                    width: 80px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                }
            }
        }
    }
}
</style>
