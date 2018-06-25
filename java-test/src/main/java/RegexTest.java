import jdk.nashorn.internal.runtime.regexp.joni.Regex;

/**
 * Created by lavawong on 7/29/16.
 */
public class RegexTest {
    static public void main(String[] args){
        String url="http://eb.meituan.com/eb/order#/all";
        String[] urlSpan;
        urlSpan = url.split("\\?|#");
        System.out.println(urlSpan.toString());
    }
}
