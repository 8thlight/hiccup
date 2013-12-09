// Compiled by ClojureScript 0.0-2080
goog.provide('hiccup.test.def');
goog.require('cljs.core');
goog.require('hiccup.def');
goog.require('hiccup.def');
hiccup.test.def.test_defhtml = (function test_defhtml() {
    return cemerick.cljs.test.test_function.call(null, hiccup.test.def.test_defhtml);
});
hiccup.test.def.test_defhtml = cljs.core.vary_meta.call(null, hiccup.test.def.test_defhtml, cljs.core.assoc, new cljs.core.Keyword(null, "name", "name", 1017277949), new cljs.core.Symbol(null, "test-defhtml", "test-defhtml", 1671229614, null), new cljs.core.Keyword(null, "test", "test", 1017460740), (function test_defhtml_test() {
    var _STAR_testing_contexts_STAR_6433_6438 = cemerick.cljs.test._STAR_testing_contexts_STAR_;
    try {
        cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null, cemerick.cljs.test._STAR_testing_contexts_STAR_, "basic html function");
        hiccup.test.def.basic_fn = (function basic_fn(x) {
            return [cljs.core.str(hiccup.core.render_element.call(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null, "span", "span", 1017440956), x], null)))].join('');
        });
        try {
            var values__5887__auto___6439 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, "<span>foo</span>"), hiccup.test.def.basic_fn.call(null, "foo"));
            var result__5888__auto___6440 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6439);
            if (cljs.core.truth_(result__5888__auto___6440)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6439), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), cljs.core.list(new cljs.core.Symbol(null, "basic-fn", "basic-fn", 937018496, null), "foo"), "<span>foo</span>")], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6439)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), cljs.core.list(new cljs.core.Symbol(null, "basic-fn", "basic-fn", 937018496, null), "foo"), "<span>foo</span>")], null));
            }
        } catch (e6434) {
            if ((e6434 instanceof Error)) {
                var t__5924__auto___6441 = e6434;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6441, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), cljs.core.list(new cljs.core.Symbol(null, "basic-fn", "basic-fn", 937018496, null), "foo"), "<span>foo</span>")], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6434;
                } else {}
            }
        }
    } finally {
        cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_6433_6438;
    }
    var _STAR_testing_contexts_STAR_6435 = cemerick.cljs.test._STAR_testing_contexts_STAR_;
    try {
        cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null, cemerick.cljs.test._STAR_testing_contexts_STAR_, "html function with overloads");
        hiccup.test.def.overloaded_fn = (function () {
            var overloaded_fn = null;
            var overloaded_fn__1 = (function (x) {
                return [cljs.core.str(hiccup.core.render_element.call(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null, "span", "span", 1017440956), x], null)))].join('');
            });
            var overloaded_fn__2 = (function (x, y) {
                return [cljs.core.str(hiccup.core.render_element.call(null, new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null, "span", "span", 1017440956), x, hiccup.core.render_element.call(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null, "div", "div", 1014003715), y], null))], null)))].join('');
            });
            overloaded_fn = function (x, y) {
                switch (arguments.length) {
                case 1:
                    return overloaded_fn__1.call(this, x);
                case 2:
                    return overloaded_fn__2.call(this, x, y);
                }
                throw (new Error('Invalid arity: ' + arguments.length));
            };
            overloaded_fn.cljs$core$IFn$_invoke$arity$1 = overloaded_fn__1;
            overloaded_fn.cljs$core$IFn$_invoke$arity$2 = overloaded_fn__2;
            return overloaded_fn;
        })();
        try {
            var values__5887__auto___6442 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, "<span>foo</span>"), hiccup.test.def.overloaded_fn.call(null, "foo"));
            var result__5888__auto___6443 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6442);
            if (cljs.core.truth_(result__5888__auto___6443)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6442), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), cljs.core.list(new cljs.core.Symbol(null, "overloaded-fn", "overloaded-fn", 1861760757, null), "foo"), "<span>foo</span>")], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6442)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), cljs.core.list(new cljs.core.Symbol(null, "overloaded-fn", "overloaded-fn", 1861760757, null), "foo"), "<span>foo</span>")], null));
            }
        } catch (e6436) {
            if ((e6436 instanceof Error)) {
                var t__5924__auto___6444 = e6436;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6444, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), cljs.core.list(new cljs.core.Symbol(null, "overloaded-fn", "overloaded-fn", 1861760757, null), "foo"), "<span>foo</span>")], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6436;
                } else {}
            }
        }
        try {
            var values__5887__auto__ = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, "<span>foo<div>bar</div></span>"), hiccup.test.def.overloaded_fn.call(null, "foo", "bar"));
            var result__5888__auto__ = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto__);
            if (cljs.core.truth_(result__5888__auto__)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto__), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), cljs.core.list(new cljs.core.Symbol(null, "overloaded-fn", "overloaded-fn", 1861760757, null), "foo", "bar"), "<span>foo<div>bar</div></span>")], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto__)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), cljs.core.list(new cljs.core.Symbol(null, "overloaded-fn", "overloaded-fn", 1861760757, null), "foo", "bar"), "<span>foo<div>bar</div></span>")], null));
            }
            return result__5888__auto__;
        } catch (e6437) {
            if ((e6437 instanceof Error)) {
                var t__5924__auto__ = e6437;
                return cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto__, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), cljs.core.list(new cljs.core.Symbol(null, "overloaded-fn", "overloaded-fn", 1861760757, null), "foo", "bar"), "<span>foo<div>bar</div></span>")], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6437;
                } else {
                    return null;
                }
            }
        }
    } finally {
        cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_6435;
    }
}));
cemerick.cljs.test.register_test_BANG_.call(null, new cljs.core.Symbol(null, "hiccup.test.def", "hiccup.test.def", 1178077332, null), hiccup.test.def.test_defhtml);
hiccup.test.def.test_defelem = (function test_defelem() {
    return cemerick.cljs.test.test_function.call(null, hiccup.test.def.test_defelem);
});
hiccup.test.def.test_defelem = cljs.core.vary_meta.call(null, hiccup.test.def.test_defelem, cljs.core.assoc, new cljs.core.Keyword(null, "name", "name", 1017277949), new cljs.core.Symbol(null, "test-defelem", "test-defelem", 1671132306, null), new cljs.core.Keyword(null, "test", "test", 1017460740), (function test_defelem_test() {
    var _STAR_testing_contexts_STAR_6466_6487 = cemerick.cljs.test._STAR_testing_contexts_STAR_;
    try {
        cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null, cemerick.cljs.test._STAR_testing_contexts_STAR_, "one overload function");
        var f__6419__auto___6488 = (function (a, b) {
            return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b, a, 3], null);
        });
        var wrapped__6420__auto___6489 = hiccup.def.wrap_attrs.call(null, f__6419__auto___6488);
        var the_var__6421__auto___6490 =
        /**
         * @param {...*} var_args
         */
        hiccup.test.def.one_form_two_args = ((function (f__6419__auto___6488, wrapped__6420__auto___6489) {
            return (function () {
                var one_form_two_args__delegate = function (hiccup.def.args) {
                    return cljs.core.apply.call(null, wrapped__6420__auto___6489, hiccup.def.args);
                };
                var one_form_two_args = function (var_args) {
                    var hiccup.def.args = null;
                    if (arguments.length > 0) {
                        hiccup.def.args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0);
                    }
                    return one_form_two_args__delegate.call(this, hiccup.def.args);
                };
                one_form_two_args.cljs$lang$maxFixedArity = 0;
                one_form_two_args.cljs$lang$applyTo = (function (arglist__6491) {
                    var hiccup.def.args = cljs.core.seq(arglist__6491);
                    return one_form_two_args__delegate(hiccup.def.args);
                });
                one_form_two_args.cljs$core$IFn$_invoke$arity$variadic = one_form_two_args__delegate;
                return one_form_two_args;
            })();
        })(f__6419__auto___6488, wrapped__6420__auto___6489));
        cljs.core.alter_meta_BANG_.call(null, the_var__6421__auto___6490, cljs.core.update_in, new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null, "arglists", "arglists", 3710771825)], null), hiccup.def.update_arglists);
        try {
            var values__5887__auto___6492 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, hiccup.test.def.one_form_two_args.call(null, 0, 1)), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, 0, 3], null));
            var result__5888__auto___6493 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6492);
            if (cljs.core.truth_(result__5888__auto___6493)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6492), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, 0, 3], null), cljs.core.list(new cljs.core.Symbol(null, "one-form-two-args", "one-form-two-args", -728186567, null), 0, 1))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6492)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, 0, 3], null), cljs.core.list(new cljs.core.Symbol(null, "one-form-two-args", "one-form-two-args", -728186567, null), 0, 1))], null));
            }
        } catch (e6467) {
            if ((e6467 instanceof Error)) {
                var t__5924__auto___6494 = e6467;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6494, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, 0, 3], null), cljs.core.list(new cljs.core.Symbol(null, "one-form-two-args", "one-form-two-args", -728186567, null), 0, 1))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6467;
                } else {}
            }
        }
        try {
            var values__5887__auto___6495 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, hiccup.test.def.one_form_two_args.call(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0, 1)), new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0, 3], null));
            var result__5888__auto___6496 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6495);
            if (cljs.core.truth_(result__5888__auto___6496)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6495), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0, 3], null), cljs.core.list(new cljs.core.Symbol(null, "one-form-two-args", "one-form-two-args", -728186567, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0, 1))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6495)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0, 3], null), cljs.core.list(new cljs.core.Symbol(null, "one-form-two-args", "one-form-two-args", -728186567, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0, 1))], null));
            }
        } catch (e6468) {
            if ((e6468 instanceof Error)) {
                var t__5924__auto___6497 = e6468;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6497, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0, 3], null), cljs.core.list(new cljs.core.Symbol(null, "one-form-two-args", "one-form-two-args", -728186567, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0, 1))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6468;
                } else {}
            }
        }
    } finally {
        cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_6466_6487;
    }
    var _STAR_testing_contexts_STAR_6469_6498 = cemerick.cljs.test._STAR_testing_contexts_STAR_;
    try {
        cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null, cemerick.cljs.test._STAR_testing_contexts_STAR_, "three overloads function");
        var f__6419__auto___6499 = (function () {
            var G__6502 = null;
            var G__6502__0 = (function () {
                return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null);
            });
            var G__6502__1 = (function (a) {
                return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a * a), 2], null);
            });
            var G__6502__2 = (function (a, b) {
                return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b, a], null);
            });
            G__6502 = function (a, b) {
                switch (arguments.length) {
                case 0:
                    return G__6502__0.call(this);
                case 1:
                    return G__6502__1.call(this, a);
                case 2:
                    return G__6502__2.call(this, a, b);
                }
                throw (new Error('Invalid arity: ' + arguments.length));
            };
            return G__6502;
        })();
        var wrapped__6420__auto___6500 = hiccup.def.wrap_attrs.call(null, f__6419__auto___6499);
        var the_var__6421__auto___6501 =
        /**
         * @param {...*} var_args
         */
        hiccup.test.def.three_forms = ((function (f__6419__auto___6499, wrapped__6420__auto___6500) {
            return (function () {
                var three_forms__delegate = function (hiccup.def.args) {
                    return cljs.core.apply.call(null, wrapped__6420__auto___6500, hiccup.def.args);
                };
                var three_forms = function (var_args) {
                    var hiccup.def.args = null;
                    if (arguments.length > 0) {
                        hiccup.def.args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0);
                    }
                    return three_forms__delegate.call(this, hiccup.def.args);
                };
                three_forms.cljs$lang$maxFixedArity = 0;
                three_forms.cljs$lang$applyTo = (function (arglist__6503) {
                    var hiccup.def.args = cljs.core.seq(arglist__6503);
                    return three_forms__delegate(hiccup.def.args);
                });
                three_forms.cljs$core$IFn$_invoke$arity$variadic = three_forms__delegate;
                return three_forms;
            })();
        })(f__6419__auto___6499, wrapped__6420__auto___6500));
        cljs.core.alter_meta_BANG_.call(null, the_var__6421__auto___6501, cljs.core.update_in, new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null, "arglists", "arglists", 3710771825)], null), hiccup.def.update_arglists);
        try {
            var values__5887__auto___6504 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, hiccup.test.def.three_forms.call(null)), new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null));
            var result__5888__auto___6505 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6504);
            if (cljs.core.truth_(result__5888__auto___6505)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6504), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null)))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6504)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null)))], null));
            }
        } catch (e6470) {
            if ((e6470 instanceof Error)) {
                var t__5924__auto___6506 = e6470;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6506, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null)))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6470;
                } else {}
            }
        }
        try {
            var values__5887__auto___6507 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, hiccup.test.def.three_forms.call(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null))), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null)], null));
            var result__5888__auto___6508 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6507);
            if (cljs.core.truth_(result__5888__auto___6508)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6507), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null)], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null)))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6507)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null)], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null)))], null));
            }
        } catch (e6471) {
            if ((e6471 instanceof Error)) {
                var t__5924__auto___6509 = e6471;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6509, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null)], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null)))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6471;
                } else {}
            }
        }
        try {
            var values__5887__auto___6510 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, hiccup.test.def.three_forms.call(null, 2)), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4, 2], null));
            var result__5888__auto___6511 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6510);
            if (cljs.core.truth_(result__5888__auto___6511)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6510), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4, 2], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null), 2))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6510)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4, 2], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null), 2))], null));
            }
        } catch (e6472) {
            if ((e6472 instanceof Error)) {
                var t__5924__auto___6512 = e6472;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6512, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4, 2], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null), 2))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6472;
                } else {}
            }
        }
        try {
            var values__5887__auto___6513 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, hiccup.test.def.three_forms.call(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2)), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [4, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null));
            var result__5888__auto___6514 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6513);
            if (cljs.core.truth_(result__5888__auto___6514)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6513), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [4, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6513)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [4, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2))], null));
            }
        } catch (e6473) {
            if ((e6473 instanceof Error)) {
                var t__5924__auto___6515 = e6473;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6515, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [4, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6473;
                } else {}
            }
        }
        try {
            var values__5887__auto___6516 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, hiccup.test.def.three_forms.call(null, 0, 1)), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, 0], null));
            var result__5888__auto___6517 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6516);
            if (cljs.core.truth_(result__5888__auto___6517)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6516), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, 0], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null), 0, 1))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6516)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, 0], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null), 0, 1))], null));
            }
        } catch (e6474) {
            if ((e6474 instanceof Error)) {
                var t__5924__auto___6518 = e6474;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6518, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, 0], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null), 0, 1))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6474;
                } else {}
            }
        }
        try {
            var values__5887__auto___6519 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, hiccup.test.def.three_forms.call(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0, 1)), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0], null));
            var result__5888__auto___6520 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6519);
            if (cljs.core.truth_(result__5888__auto___6520)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6519), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0, 1))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6519)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0, 1))], null));
            }
        } catch (e6475) {
            if ((e6475 instanceof Error)) {
                var t__5924__auto___6521 = e6475;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6521, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0], null), cljs.core.list(new cljs.core.Symbol(null, "three-forms", "three-forms", -2022731527, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 0, 1))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6475;
                } else {}
            }
        }
    } finally {
        cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_6469_6498;
    }
    var _STAR_testing_contexts_STAR_6476_6522 = cemerick.cljs.test._STAR_testing_contexts_STAR_;
    try {
        cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null, cemerick.cljs.test._STAR_testing_contexts_STAR_, "recursive function");
        var f__6419__auto___6523 = (function (a) {
            if ((a < 1)) {
                return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a, (a + 1)], null);
            } else {
                return hiccup.test.def.recursive.call(null, (a - 1));
            }
        });
        var wrapped__6420__auto___6524 = hiccup.def.wrap_attrs.call(null, f__6419__auto___6523);
        var the_var__6421__auto___6525 =
        /**
         * @param {...*} var_args
         */
        hiccup.test.def.recursive = ((function (f__6419__auto___6523, wrapped__6420__auto___6524) {
            return (function () {
                var recursive__delegate = function (hiccup.def.args) {
                    return cljs.core.apply.call(null, wrapped__6420__auto___6524, hiccup.def.args);
                };
                var recursive = function (var_args) {
                    var hiccup.def.args = null;
                    if (arguments.length > 0) {
                        hiccup.def.args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0);
                    }
                    return recursive__delegate.call(this, hiccup.def.args);
                };
                recursive.cljs$lang$maxFixedArity = 0;
                recursive.cljs$lang$applyTo = (function (arglist__6526) {
                    var hiccup.def.args = cljs.core.seq(arglist__6526);
                    return recursive__delegate(hiccup.def.args);
                });
                recursive.cljs$core$IFn$_invoke$arity$variadic = recursive__delegate;
                return recursive;
            })();
        })(f__6419__auto___6523, wrapped__6420__auto___6524));
        cljs.core.alter_meta_BANG_.call(null, the_var__6421__auto___6525, cljs.core.update_in, new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null, "arglists", "arglists", 3710771825)], null), hiccup.def.update_arglists);
        try {
            var values__5887__auto___6527 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, hiccup.test.def.recursive.call(null, 4)), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0, 1], null));
            var result__5888__auto___6528 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6527);
            if (cljs.core.truth_(result__5888__auto___6528)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6527), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0, 1], null), cljs.core.list(new cljs.core.Symbol(null, "recursive", "recursive", -474751509, null), 4))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6527)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0, 1], null), cljs.core.list(new cljs.core.Symbol(null, "recursive", "recursive", -474751509, null), 4))], null));
            }
        } catch (e6477) {
            if ((e6477 instanceof Error)) {
                var t__5924__auto___6529 = e6477;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6529, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0, 1], null), cljs.core.list(new cljs.core.Symbol(null, "recursive", "recursive", -474751509, null), 4))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6477;
                } else {}
            }
        }
        try {
            var values__5887__auto___6530 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, hiccup.test.def.recursive.call(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 4)), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 1], null));
            var result__5888__auto___6531 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6530);
            if (cljs.core.truth_(result__5888__auto___6531)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6530), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 1], null), cljs.core.list(new cljs.core.Symbol(null, "recursive", "recursive", -474751509, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 4))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6530)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 1], null), cljs.core.list(new cljs.core.Symbol(null, "recursive", "recursive", -474751509, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 4))], null));
            }
        } catch (e6478) {
            if ((e6478 instanceof Error)) {
                var t__5924__auto___6532 = e6478;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6532, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 1], null), cljs.core.list(new cljs.core.Symbol(null, "recursive", "recursive", -474751509, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 4))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6478;
                } else {}
            }
        }
    } finally {
        cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_6476_6522;
    }
    var _STAR_testing_contexts_STAR_6479_6533 = cemerick.cljs.test._STAR_testing_contexts_STAR_;
    try {
        cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null, cemerick.cljs.test._STAR_testing_contexts_STAR_, "merge map if result has one");
        var f__6419__auto___6534 = (function () {
            var G__6537 = null;
            var G__6537__0 = (function () {
                return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null);
            });
            var G__6537__2 = (function (a, b) {
                return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), b], null);
            });
            G__6537 = function (a, b) {
                switch (arguments.length) {
                case 0:
                    return G__6537__0.call(this);
                case 2:
                    return G__6537__2.call(this, a, b);
                }
                throw (new Error('Invalid arity: ' + arguments.length));
            };
            return G__6537;
        })();
        var wrapped__6420__auto___6535 = hiccup.def.wrap_attrs.call(null, f__6419__auto___6534);
        var the_var__6421__auto___6536 =
        /**
         * @param {...*} var_args
         */
        hiccup.test.def.with_map = ((function (f__6419__auto___6534, wrapped__6420__auto___6535) {
            return (function () {
                var with_map__delegate = function (hiccup.def.args) {
                    return cljs.core.apply.call(null, wrapped__6420__auto___6535, hiccup.def.args);
                };
                var with_map = function (var_args) {
                    var hiccup.def.args = null;
                    if (arguments.length > 0) {
                        hiccup.def.args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0);
                    }
                    return with_map__delegate.call(this, hiccup.def.args);
                };
                with_map.cljs$lang$maxFixedArity = 0;
                with_map.cljs$lang$applyTo = (function (arglist__6538) {
                    var hiccup.def.args = cljs.core.seq(arglist__6538);
                    return with_map__delegate(hiccup.def.args);
                });
                with_map.cljs$core$IFn$_invoke$arity$variadic = with_map__delegate;
                return with_map;
            })();
        })(f__6419__auto___6534, wrapped__6420__auto___6535));
        cljs.core.alter_meta_BANG_.call(null, the_var__6421__auto___6536, cljs.core.update_in, new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null, "arglists", "arglists", 3710771825)], null), hiccup.def.update_arglists);
        try {
            var values__5887__auto___6539 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, hiccup.test.def.with_map.call(null)), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null));
            var result__5888__auto___6540 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6539);
            if (cljs.core.truth_(result__5888__auto___6540)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6539), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null), cljs.core.list(new cljs.core.Symbol(null, "with-map", "with-map", 1712550286, null)))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6539)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null), cljs.core.list(new cljs.core.Symbol(null, "with-map", "with-map", 1712550286, null)))], null));
            }
        } catch (e6480) {
            if ((e6480 instanceof Error)) {
                var t__5924__auto___6541 = e6480;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6541, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null), cljs.core.list(new cljs.core.Symbol(null, "with-map", "with-map", 1712550286, null)))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6480;
                } else {}
            }
        }
        try {
            var values__5887__auto___6542 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, hiccup.test.def.with_map.call(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340)], null))), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340), new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null));
            var result__5888__auto___6543 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6542);
            if (cljs.core.truth_(result__5888__auto___6543)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6542), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340), new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null), cljs.core.list(new cljs.core.Symbol(null, "with-map", "with-map", 1712550286, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340)], null)))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6542)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340), new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null), cljs.core.list(new cljs.core.Symbol(null, "with-map", "with-map", 1712550286, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340)], null)))], null));
            }
        } catch (e6481) {
            if ((e6481 instanceof Error)) {
                var t__5924__auto___6544 = e6481;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6544, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340), new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null), cljs.core.list(new cljs.core.Symbol(null, "with-map", "with-map", 1712550286, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340)], null)))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6481;
                } else {}
            }
        }
        try {
            var values__5887__auto___6545 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, hiccup.test.def.with_map.call(null, 1, 2)), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null));
            var result__5888__auto___6546 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6545);
            if (cljs.core.truth_(result__5888__auto___6546)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6545), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null), cljs.core.list(new cljs.core.Symbol(null, "with-map", "with-map", 1712550286, null), 1, 2))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6545)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null), cljs.core.list(new cljs.core.Symbol(null, "with-map", "with-map", 1712550286, null), 1, 2))], null));
            }
        } catch (e6482) {
            if ((e6482 instanceof Error)) {
                var t__5924__auto___6547 = e6482;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6547, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541)], null), 2], null), cljs.core.list(new cljs.core.Symbol(null, "with-map", "with-map", 1712550286, null), 1, 2))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6482;
                } else {}
            }
        }
        try {
            var values__5887__auto___6548 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, hiccup.test.def.with_map.call(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340)], null), 1, 2)), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541), new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340)], null), 2], null));
            var result__5888__auto___6549 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6548);
            if (cljs.core.truth_(result__5888__auto___6549)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6548), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541), new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340)], null), 2], null), cljs.core.list(new cljs.core.Symbol(null, "with-map", "with-map", 1712550286, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340)], null), 1, 2))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6548)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541), new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340)], null), 2], null), cljs.core.list(new cljs.core.Symbol(null, "with-map", "with-map", 1712550286, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340)], null), 1, 2))], null));
            }
        } catch (e6483) {
            if ((e6483 instanceof Error)) {
                var t__5924__auto___6550 = e6483;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6550, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null, "foo", "foo", 1014005816), new cljs.core.Keyword(null, "bar", "bar", 1014001541), new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340)], null), 2], null), cljs.core.list(new cljs.core.Symbol(null, "with-map", "with-map", 1712550286, null), new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null, "a", "a", 1013904339), new cljs.core.Keyword(null, "b", "b", 1013904340)], null), 1, 2))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6483;
                } else {}
            }
        }
    } finally {
        cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_6479_6533;
    }
    var _STAR_testing_contexts_STAR_6484 = cemerick.cljs.test._STAR_testing_contexts_STAR_;
    try {
        cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.conj.call(null, cemerick.cljs.test._STAR_testing_contexts_STAR_, "preserve meta info");
        var f__6419__auto___6551 = (function () {
            var G__6554 = null;
            var G__6554__0 = (function () {
                if (false) {} else {
                    throw (new Error([cljs.core.str("Assert failed: "), cljs.core.str(cljs.core.pr_str.call(null, false))].join('')));
                }
                return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null);
            });
            var G__6554__1 = (function (a) {
                if ((a > 1)) {} else {
                    throw (new Error([cljs.core.str("Assert failed: "), cljs.core.str(cljs.core.pr_str.call(null, cljs.core.list(new cljs.core.Symbol(null, ">", ">", -1640531465, null), new cljs.core.Symbol(null, "a", "a", -1640531430, null), 1)))].join('')));
                }
                return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [1], null);
            });
            var G__6554__2 = (function (a, b) {
                if ((a > 1)) {} else {
                    throw (new Error([cljs.core.str("Assert failed: "), cljs.core.str(cljs.core.pr_str.call(null, cljs.core.list(new cljs.core.Symbol(null, ">", ">", -1640531465, null), new cljs.core.Symbol(null, "a", "a", -1640531430, null), 1)))].join('')));
                }
                return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1, 2], null);
            });
            G__6554 = function (a, b) {
                switch (arguments.length) {
                case 0:
                    return G__6554__0.call(this);
                case 1:
                    return G__6554__1.call(this, a);
                case 2:
                    return G__6554__2.call(this, a, b);
                }
                throw (new Error('Invalid arity: ' + arguments.length));
            };
            return G__6554;
        })();
        var wrapped__6420__auto___6552 = hiccup.def.wrap_attrs.call(null, f__6419__auto___6551);
        var the_var__6421__auto___6553 =
        /**
         * my documentation
         * @param {...*} var_args
         */
        hiccup.test.def.three_forms_extra = ((function (f__6419__auto___6551, wrapped__6420__auto___6552) {
            return (function () {
                var three_forms_extra__delegate = function (hiccup.def.args) {
                    return cljs.core.apply.call(null, wrapped__6420__auto___6552, hiccup.def.args);
                };
                var three_forms_extra = function (var_args) {
                    var hiccup.def.args = null;
                    if (arguments.length > 0) {
                        hiccup.def.args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0);
                    }
                    return three_forms_extra__delegate.call(this, hiccup.def.args);
                };
                three_forms_extra.cljs$lang$maxFixedArity = 0;
                three_forms_extra.cljs$lang$applyTo = (function (arglist__6555) {
                    var hiccup.def.args = cljs.core.seq(arglist__6555);
                    return three_forms_extra__delegate(hiccup.def.args);
                });
                three_forms_extra.cljs$core$IFn$_invoke$arity$variadic = three_forms_extra__delegate;
                return three_forms_extra;
            })();
        })(f__6419__auto___6551, wrapped__6420__auto___6552));
        cljs.core.alter_meta_BANG_.call(null, the_var__6421__auto___6553, cljs.core.update_in, new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null, "arglists", "arglists", 3710771825)], null), hiccup.def.update_arglists);
        try {
            var values__5887__auto___6556 = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, new cljs.core.Keyword(null, "doc", "doc", 1014003882).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null, hiccup.test.def.three_forms_extra))), "my documentation");
            var result__5888__auto___6557 = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto___6556);
            if (cljs.core.truth_(result__5888__auto___6557)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto___6556), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), "my documentation", cljs.core.list(new cljs.core.Keyword(null, "doc", "doc", 1014003882), cljs.core.list(new cljs.core.Symbol(null, "meta", "meta", -1637183554, null), new cljs.core.Symbol(null, "three-forms-extra", "three-forms-extra", -119355140, null))))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto___6556)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), "my documentation", cljs.core.list(new cljs.core.Keyword(null, "doc", "doc", 1014003882), cljs.core.list(new cljs.core.Symbol(null, "meta", "meta", -1637183554, null), new cljs.core.Symbol(null, "three-forms-extra", "three-forms-extra", -119355140, null))))], null));
            }
        } catch (e6485) {
            if ((e6485 instanceof Error)) {
                var t__5924__auto___6558 = e6485;
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto___6558, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), "my documentation", cljs.core.list(new cljs.core.Keyword(null, "doc", "doc", 1014003882), cljs.core.list(new cljs.core.Symbol(null, "meta", "meta", -1637183554, null), new cljs.core.Symbol(null, "three-forms-extra", "three-forms-extra", -119355140, null))))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6485;
                } else {}
            }
        }
        try {
            var values__5887__auto__ = cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, new cljs.core.Keyword(null, "my", "my", 1013907742).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null, hiccup.test.def.three_forms_extra))), new cljs.core.Keyword(null, "attr", "attr", 1016909155));
            var result__5888__auto__ = cljs.core.apply.call(null, cljs.core._EQ_, values__5887__auto__);
            if (cljs.core.truth_(result__5888__auto__)) {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core.cons.call(null, cljs.core._EQ_, values__5887__auto__), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "pass", "pass", 1017337731), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.Keyword(null, "attr", "attr", 1016909155), cljs.core.list(new cljs.core.Keyword(null, "my", "my", 1013907742), cljs.core.list(new cljs.core.Symbol(null, "meta", "meta", -1637183554, null), new cljs.core.Symbol(null, "three-forms-extra", "three-forms-extra", -119355140, null))))], null));
            } else {
                cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), cljs.core._conj.call(null, cljs.core._conj.call(null, cljs.core.List.EMPTY, cljs.core.cons.call(null, new cljs.core.Symbol(null, "=", "=", -1640531466, null), values__5887__auto__)), new cljs.core.Symbol(null, "not", "not", -1640422260, null)), new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "fail", "fail", 1017039504), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.Keyword(null, "attr", "attr", 1016909155), cljs.core.list(new cljs.core.Keyword(null, "my", "my", 1013907742), cljs.core.list(new cljs.core.Symbol(null, "meta", "meta", -1637183554, null), new cljs.core.Symbol(null, "three-forms-extra", "three-forms-extra", -119355140, null))))], null));
            }
            return result__5888__auto__;
        } catch (e6486) {
            if ((e6486 instanceof Error)) {
                var t__5924__auto__ = e6486;
                return cemerick.cljs.test.do_report.call(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null, "actual", "actual", 3885931776), t__5924__auto__, new cljs.core.Keyword(null, "type", "type", 1017479852), new cljs.core.Keyword(null, "error", "error", 1110689146), new cljs.core.Keyword(null, "message", "message", 1968829305), null, new cljs.core.Keyword(null, "expected", "expected", 3373152810), cljs.core.list(new cljs.core.Symbol(null, "=", "=", -1640531466, null), new cljs.core.Keyword(null, "attr", "attr", 1016909155), cljs.core.list(new cljs.core.Keyword(null, "my", "my", 1013907742), cljs.core.list(new cljs.core.Symbol(null, "meta", "meta", -1637183554, null), new cljs.core.Symbol(null, "three-forms-extra", "three-forms-extra", -119355140, null))))], null));
            } else {
                if (new cljs.core.Keyword(null, "else", "else", 1017020587)) {
                    throw e6486;
                } else {
                    return null;
                }
            }
        }
    } finally {
        cemerick.cljs.test._STAR_testing_contexts_STAR_ = _STAR_testing_contexts_STAR_6484;
    }
}));
cemerick.cljs.test.register_test_BANG_.call(null, new cljs.core.Symbol(null, "hiccup.test.def", "hiccup.test.def", 1178077332, null), hiccup.test.def.test_defelem);
