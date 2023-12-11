import request from '@/utils/request'

// 发送文章评论
export function sendComment(type,articleId,rootId,toCommentId,toCommentUserId,content) {
    return request({
        url: '/comment',
        method: 'post',
        // 文章id，文章类型，根评论id，回复目标评论id，回复的目标评论用户id，评论内容
        data: {"articleId":articleId,"type":type,"rootId":rootId,"toCommentId":toCommentId,"toCommentUserId":toCommentUserId,"content":content}
    })
}


export function getArticleComment(query) {
    return request({
        url: '/comment/commentList',
        method: 'get',
        headers: {
          isToken: false
        },
        params: query
    })
}


export function getLinkComment(query) {
    return request({
        url: '/comment/linkCommentList',
        method: 'get',
        params: query
    })
}