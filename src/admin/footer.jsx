function Footer(){
    return(
<main>
		<footer id="footer" className="footer">
			<div className="copyright">&copy; CAO ĐẲNG THỰC HÀNH FPT
				POLYTECHNIC CƠ SỞ CẦN THƠ 2023</div>
			<div className="credits">

				Designed by <a href="/memberInformation.html">Tùng - Thiên -
					Tường - Phát - Hào</a>
			</div>
		</footer>
		<div className="backTop">
			<button onclick="topFunction()" id="totop" title="Go to top">
				<i className="fa-solid fa-arrow-up"></i>
			</button>
		</div>

		<script src="/js/statistics.js"></script>
		<script src="/js/backTop.js"></script>
	</main>
    )
}
export default Footer